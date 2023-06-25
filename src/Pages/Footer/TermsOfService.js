import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-pink-500 flex items-center justify-center">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-4xl text-gray-800 font-bold mb-8">Terms of Service</h2>
        <div className="text-gray-700 leading-7">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p className="mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </p>
          <p className="mb-4">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
        <div className="mt-8">
          <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded mr-4">
            Accept
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-6 rounded">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
