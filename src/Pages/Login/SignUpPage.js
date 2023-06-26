import React from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const RegistrationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 to-purple-500 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:max-w-md mx-4">
        <div className="px-10 py-8">
          <h2 className="text-3xl text-center text-gray-800 font-bold mb-6">Registration</h2>
          <form>
            <div className="mb-6">
              <div className="flex items-center border-b border-gray-300 py-2">
                <div className="mr-3">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center border-b border-gray-300 py-2">
                <div className="mr-3">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 leading-tight focus:outline-none"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center border-b border-gray-300 py-2">
                <div className="mr-3">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 leading-tight focus:outline-none"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center border-b border-gray-300 py-2">
                <div className="mr-3">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 leading-tight focus:outline-none"
                  type="password"
                  placeholder="Retype Password"
                />
              </div>
            </div>
            <div>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded w-full transition duration-300 ease-in-out">
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="bg-gray-100 px-10 py-4">
          <p className="text-gray-800 text-center">
            Already have an account?{' '}
            <a href="#" className="text-purple-600 hover:text-purple-800">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
