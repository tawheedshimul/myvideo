import React, { useContext } from 'react';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../Context/UserContext';

const LoginPage = () => {
  // go to the top page 
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  const {signIn} = useContext(Authcontext);
  
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);


    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log('rsultuser', user);
      form.reset();
    })
    .catch(error => {
      console.error(error);
    })


  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:max-w-md mx-4">
        <div className="px-10 py-8">
          <h2 className="text-3xl text-center text-gray-800 font-bold mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <div className="flex items-center border-b border-gray-300 py-2">
                <div className="mr-3">
                  <AiOutlineMail className="text-gray-400" />
                </div>
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 leading-tight focus:outline-none"
                  type="email"
                  name='email'
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center border-b border-gray-300 py-2">
                <div className="mr-3">
                  <AiOutlineLock className="text-gray-400" />
                </div>
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 leading-tight focus:outline-none"
                  type="password"
                  name='password'
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox mr-2" />
                <span className="text-gray-700">Remember me</span>
              </label>
              <a href="#" className="text-purple-600 hover:text-purple-800">Forgot password?</a>
            </div>
            <div>
              <button
              type='submit'
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded w-full transition duration-300 ease-in-out">
                Log In
              </button>
            </div>
          </form>
        </div>
        <div className="bg-gray-100 px-10 py-4">
          <p className="text-gray-800 text-center">
            Don't have an account?{' '}
            <Link onClick={handleLinkClick} to="/signup" className="text-purple-600 hover:text-purple-800">Sign Up</Link>
          </p>
          <div className="flex items-center justify-center mt-4">
            <button className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded mr-4">
              <FaGoogle className="mr-2" />
              <p>Google</p>
            </button>
            <button className="flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded">
              <FaGithub className="mr-2" />
              <p>GitHub</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
