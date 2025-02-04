"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: false,
  apiVersion: "2025-01-15",
});

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source).url();
}

export interface Product {
  _id: string;
  name: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  price: string;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        console.log("Fetching product with ID:", id);
        const query = `*[_type == "product" && _id == "${id}"][0]`;
        const productData = await client.fetch(query);
        setProduct(productData);
      } catch (err) {
        setError("Failed to fetch product. Please try again.");
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!product) {
    return <p className="text-center text-gray-600">Product is not available.</p>;
  }


  //////////////////////////
  const copyProductLink = () => {
    const productURL = window.location.href;
    navigator.clipboard.writeText(productURL);
    alert("Product link copied to clipboard!");
  };
  



  /////////////////////////////

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-700 mt-2">Product ID: {product._id}</p>

      <div className="mt-4">
        <img
          src={urlFor(product.image?.asset?._ref) || "/default-product-image.jpg"}
          alt={product.name || "Product Image"}
          className="w-72 h-72 rounded-lg shadow"
        />
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-lg font-bold text-gray-900 mt-2">
          Price: ${product.price}
        </p>
        <p className="text-sm text-gray-600">Category: {product.category}</p>
        <p className="text-sm text-gray-600">Stock: {product.stockLevel}</p>
      </div>

      <div className="mt-4">
        <button onClick={copyProductLink}  className="mt-2 ml-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;

