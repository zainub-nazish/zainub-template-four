import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";

export interface Product {
  _id: string;
  name: string;
  imageUrl: string;
  price: string;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}

const Fatch: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const query = `*[_type == "product"]{
      _id,
      name,
      "imageUrl": image.asset->url,
      price,
      description,
      discountPercentage,
      isFeaturedProduct,
      stockLevel,
      category
    }`;

    try {
      const products = await client.fetch(query);
      console.log("Fetched products:", products); 
      setProducts(products);
    } catch (error) {
      console.error("Sanity fetch error:", error); 
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((item) => (
        <div
          key={item._id}
          className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-all"
        >
          <Image
            src={urlFor(item.imageUrl).url()}
            alt={item.name}
            width={300}
            height={300}
            className="w-full h-48 object-cover rounded-md"
          />
          <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
          <p className="text-gray-600 text-sm">{item.category}</p>
          <p className="text-gray-800 font-bold mt-1">${item.price}</p>
          <Link href={`/product/${item._id}`}>
            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Add To Cart
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Fatch;
