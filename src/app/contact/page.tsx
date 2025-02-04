import Image from "next/image";

const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Contact Us</h1>
        <p className="text-sm text-gray-500">Home / Pages / Contact Us</p>
      </div>
       <br/> <br/>
      {/* Information Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
        {/* Information About Us */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">Information About us</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque
            quam, maximus ut accumsan ut, posuere sit amet libero.
          </p>
          <div className="flex space-x-2">
            <span className="w-4 h-4 rounded-full bg-blue-500"></span>
            <span className="w-4 h-4 rounded-full bg-pink-500"></span>
            <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
          </div>
        </div>

        {/* Contact Way */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">Contact Way</h2>
          <p className="text-gray-600">
            <strong>Tel:</strong> 123-456-789 <br />
            <strong>Email:</strong> support@example.com
          </p>
          <p className="text-gray-600">
            <strong>Address:</strong> 25th Main Street, London
          </p>
          <p className="text-gray-600">
            <strong>Support Hours:</strong> Mon - Fri: 9 AM - 6 PM
          </p>
        </div>
      </div>

      {/* Get In Touch Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Your Name</label>
            <input
              type="text"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Your Email</label>
            <input
              type="email"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Subject</label>
            <input
              type="text"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter subject"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Your Message</label>
            <textarea
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Type your message"
              rows={4}
            ></textarea>
          </div>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md shadow hover:bg-pink-600">
            Send Mail
          </button>
        </form>

        {/* Illustration */}
        <div className="relative h-72 lg:h-full">
          <Image
            src="/product/contact.png" 
            alt="Contact Illustration"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;