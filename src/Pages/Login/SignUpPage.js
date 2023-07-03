import React, { useContext } from 'react';
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../Context/UserContext';

const RegistrationPage = () => {

  // go to the top page 
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };


  const { createUser, signInWithGoogle } = useContext(Authcontext);
  console.log('createuser', createUser);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    const retypePassword = form.retypePassword.value
    console.log(name, email, password, retypePassword);

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log('rsultuser', user);
        form.reset();
      })
      .catch(error => {
        console.error(error);
      })
  }
  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result => {
      const user = result.user;
    })
    .catch(error => console.error(error));
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-purple-200 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:max-w-md mx-4">
        <div className="px-10 py-8">
          <h2 className="text-3xl text-center text-gray-800 font-bold mb-6">Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <div className="flex items-center border-b border-gray-300 py-2">
                <div className="mr-3">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 leading-tight focus:outline-none"
                  type="text"
                  name="fullName" // Name attribute for Full Name input field
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
                  name="email" // Name attribute for Email input field
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
                  name="password" // Name attribute for Password input field
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
                  name="retypePassword" // Name attribute for Retype Password input field
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
            <Link
              onClick={handleLinkClick}
              to='/login'
              className="text-purple-600 hover:text-purple-800">Log In</Link>
          </p>
          <div className="flex items-center justify-center mt-4">
            <button onClick={handleGoogleSignIn} className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded mr-4">
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

export default RegistrationPage;
