import React from 'react'

const Footer = () => {
  return (
    
    <div>
    <div className="bg-gray-200 text-black mt-14 px-4 sm:px-6 lg:px-12 xl:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* First Column: Sign Up */}
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-10">Hekto</h1>
          <div className="flex items-center space-x-2 w-full max-w-[400px]">
            <input
              type="text"
              placeholder="Enter Email Address"
              className="border rounded-l-md px-3 py-1 focus:outline-none w-full"
            />
            <button className="bg-pink-500 rounded text-white px-2 hover:bg-pink-600">
              sign 
            </button>
          </div>
          <ul className="mt-8">
            <li className="mt-4">Contact Info</li>
            <li className="mt-3">17 Princess Road, London, Greater London NW1 8JR, UK</li>
          </ul>
        </div>
  
        {/* Second Column: Categories */}
        <div>
          <h1 className="text-2xl font-bold">Categories</h1>
          <ul className="mt-4">
            <li className="mt-3">Laptops & Computers</li>
            <li className="mt-3">Cameras & Photography</li>
            <li className="mt-3">Smart Phones & Tablets</li>
            <li className="mt-3">Video Games & Consoles</li>
            <li className="mt-3">Waterproof Headphones</li>
          </ul>
        </div>
  
        {/* Third Column: Customer Care */}
        <div>
          <h1 className="text-2xl font-bold">Customer Care</h1>
          <ul className="mt-4">
            <li className="mt-4">My Account</li>
            <li className="mt-4">Discount</li>
            <li className="mt-4">Returns</li>
            <li className="mt-6">Orders History</li>
            <li className="mt-4">Order Tracking</li>
          </ul>
        </div>
  
        {/* Fourth Column: Pages */}
        <div>
          <h1 className="text-2xl font-bold mb-6">Pages</h1>
          <ul>
            <li className="mt-1">Blog</li>
            <li className="mt-1">Browse the Shop</li>
            <li className="mt-1">Category</li>
            <li className="mt-1">Pre-Built Pages</li>
            <li className="mt-1">Visual Composer Elements</li>
            <li className="mt-1">WooCommerce Pages</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
    
  )
}

export default Footer