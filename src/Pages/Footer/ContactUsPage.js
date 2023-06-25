import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 mx-4 md:mx-auto md:max-w-2xl lg:max-w-4xl">
        <div className="md:flex">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-gray-800 font-bold mb-8">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name:</label>
                <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" type="text" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email:</label>
                <input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" type="email" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message:</label>
                <textarea className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" rows="4"></textarea>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
            <h2 className="text-2xl text-gray-800 font-bold mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-2">
              <span className="text-gray-800 font-semibold">Phone:</span> 123-456-7890
            </p>
            <p className="text-gray-700 mb-2">
              <span className="text-gray-800 font-semibold">Email:</span> info@example.com
            </p>
            <p className="text-gray-700 mb-2">
              <span className="text-gray-800 font-semibold">Address:</span> 123 Street, City, Country
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
