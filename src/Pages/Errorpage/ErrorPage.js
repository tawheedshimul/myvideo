import React from 'react';

const ErrorPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="bg-center bg-no-repeat h-96" style={{ backgroundImage: 'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)' }}>
            <h1 className="text-8xl">404</h1>
          </div>

          <div className="mt-20">
            <h3 className="text-4xl">Look like you're lost</h3>
            <p className="text-xl">The page you are looking for is not available!</p>
            <a href="/" className="text-white py-3 rounded px-6 bg-green-500 mt-10 inline-block">
              Go to Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
