import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-10 space-y-8">
  
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600">About Our Product</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Delivering powerful solutions to simplify your shopping experience.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">What We Do</h2>
          <p className="text-gray-700">
            Our product is designed to bring seamless e-commerce functionality to both buyers and sellers. 
            Whether you're browsing, buying, or managing inventory — our tools provide speed, clarity, and reliability.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Key Features</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Real-time product updates and inventory tracking</li>
            <li>User-friendly UI with fast navigation</li>
            <li>Secure login, registration, and order handling</li>
            <li>Admin dashboard to manage products and users</li>
            <li>Optimized for mobile and desktop experiences</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
          <p className="text-gray-700">
            We aim to empower businesses and simplify customer choices by delivering a modern, scalable, and customizable platform. 
            Our focus is on performance, design, and user trust.
          </p>
        </section>

        <div className="text-center pt-6 border-t">
          <p className="text-gray-600">Have questions or feedback?</p>
          <a
            href="/contact"
            className="inline-block mt-2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
