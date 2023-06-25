import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can add your authentication logic
    // For simplicity, we'll just check if the email and password match a hardcoded value
    if (email === 'example@example.com' && password === 'password') {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Welcome, {email}!</h2>
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mb-4"
          onClick={handleLogout}
        >
          Logout
        </button>
        <div className="flex">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2">
            Google
          </button>
          <button className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded">
            GitHub
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Login Page</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            className="border border-gray-300 rounded px-3 py-2 w-full"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password:</label>
          <input
            className="border border-gray-300 rounded px-3 py-2 w-full"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          className="bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded mb-4"
          type="submit"
        >
          Login
        </button>
        <div className="flex">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2">
            Google
          </button>
          <button className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded">
            GitHub
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
