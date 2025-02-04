"use client";
import Image from "next/image";

const What = () => {
  const offers = [
    {
      id: 1,
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      icon: "/product/w1.png", 
    },
    {
      id: 2,
      title: "Fast Delivery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      icon: "/product/w2.png",
    },
    {
      id: 3,
      title: "Secure Payment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      icon: "/product/w3.png",
    },
    {
      id: 4,
      title: "Quality Products",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      icon: "/product/w4.png",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-8">
          What Shopex Offer!
        </h2>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition"
            >
              {/* Icon */}
              <Image
                src={offer.icon}
                alt={offer.title}
                width={300}
                height={300}
                className="mx-auto w-12 h-12 mb-4"/>
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800">
                {offer.title}
              </h3>
              {/* Description */}
              <p className="text-gray-500 text-sm mt-2">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default What;