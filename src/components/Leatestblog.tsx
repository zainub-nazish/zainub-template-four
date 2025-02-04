
import React from 'react'


const Leatestblog = () => {
    const blogs = [
        {
            id: 1,
            title: " Top essential trends in 2024.",
            description:
                "More off this less hello samlande lied much over tightly circa horse taped mightly.",
            author: "Surfauxion ",
            date: "Dec 24, 2024",
            image: "/product/b1.png",
        },
        {
            id: 2,
            title: "Top esssential Trends in 2024 .",
            description:
                "More off this less hello samlande lied much over tightly circa horse taped mightly  .",
            author: "SaberAli ",
            date: "Dec 24, 2024",
            image: "/product/b2.png",
        },
    ];

    return (
        <div className="bg-purple-50 min-h-screen py-10 px-4">
            {/* Header Section */}
            <div className="max-w-5xl mx-auto text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Leatest Blog</h1>

            </div>

            {/* Blog Cards */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden group transition-transform transform hover:scale-105"
                    >
                        {/* Image Section */}
                        <div className="relative">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-52 object-cover"></img>
                        
                        </div>

                        {/* Content Section */}
                        <div className="p-6">
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                                <p className="mr-4">
                                    <span className="font-medium text-purple-600">{blog.author}</span>
                                </p>
                                <p className="flex items-center">
                                    <span className="text-gray-400 mx-1">|</span>
                                    {blog.date}
                                </p>
                            </div>
                            <h2 className="text-lg font-bold text-gray-800 mb-2">{blog.title}</h2>
                            <p className="text-sm text-gray-600 mb-4">{blog.description}</p>
                            <a
                                href="#"
                                className="text-purple-600 text-sm font-medium hover:underline"
                            >
                                Read More →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leatestblog;