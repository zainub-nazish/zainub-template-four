import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      
      <div className="bg-purple-50 min-h-screen flex justify-center items-start pt-8 sm:pt-12">
  <div className="relative w-full max-w-5xl p-6 md:p-8 bg-white shadow-lg rounded-lg">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Content */}
      <div className="space-y-4 text-center md:text-left">
        <p className="text-sm text-pink-500 font-medium">Best Furniture for Your Comfort</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
          New Furniture Collection <br /> Trends in 2020
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
        </p>
        <button className="px-6 py-3 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600">
          Shop Now
        </button>
      </div>

      {/* Right Content */}
      <div className="relative">
        <div className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          50% off
        </div>
        <Image
          src="/product/chair1.png"
          alt="Furniture Chair"
          width={300}
          height={300}
          className="w-full h-auto object-contain rounded-md"/>
          
        
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Hero