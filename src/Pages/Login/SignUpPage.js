import React, { useState } from 'react';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Here you can add your sign-up logic
    // For simplicity, we'll just log the name, email, and password to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // You can then redirect the user to another page or perform further actions
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full mx-auto">
        <h2 className="text-2xl font-bold mb-4">Sign Up Page</h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block">Name:</label>
            <input
              className="border border-gray-300 rounded px-3 py-2 w-full"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label className="block">Email:</label>
            <input
              className="border border-gray-300 rounded px-3 py-2 w-full"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label className="block">Password:</label>
            <input
              className="border border-gray-300 rounded px-3 py-2 w-full"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 flex justify-center">
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mr-2">
            Google
          </button>
          <button className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded">
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
