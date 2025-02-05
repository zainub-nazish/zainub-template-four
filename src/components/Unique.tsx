import React from 'react'
import Image from 'next/image'

const Unique = () => {
  return (
   
    <section className="bg-purple-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Image Section */}
      <div className="relative h-72 lg:h-full">
        <Image
          src="/product/bluesofa.png" 
          alt="Trending Chair"
          style={{ objectFit: 'cover' }} 
          width={350}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Text and Features */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Unique Features Of Latest Trending Products
        </h2>
        <ul className="space-y-2">
          <li className="flex items-start space-x-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full mt-1"></span>
            <p className="text-gray-600">
              All frames are constructed with hardwood solids and laminates.
            </p>
          </li>
          <li className="flex items-start space-x-2">
            <span className="w-3 h-3 bg-pink-500 rounded-full mt-1"></span>
            <p className="text-gray-600">
              Reinforced with double wood dowels, glue, screws, and corner blocks for extra stability.
            </p>
          </li>
          <li className="flex items-start space-x-2">
            <span className="w-3 h-3 bg-green-500 rounded-full mt-1"></span>
            <p className="text-gray-600">
              Arms, backs, and seats are structurally reinforced.
            </p>
          </li>
        </ul>

        {/* Button and Price */}
        <div className="flex items-center space-x-4">
          <button className="bg-pink-500 text-white px-6 py-2 rounded-md shadow hover:bg-pink-600">
            Add To Cart
          </button>
          <div>
            <p className="text-gray-800 font-bold">B&B italian Sofa</p>
            <p className="text-gray-600">$32.00</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Unique