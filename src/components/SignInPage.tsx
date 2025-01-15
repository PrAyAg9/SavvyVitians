// src/components/SignInPage.tsx

import React, { useContext } from 'react';
import { AuthContext } from '../pages/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignInPage: React.FC = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (error: any) {
      console.error('Error signing in with Google:', error);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-purple-200">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 animate-fadeIn">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Welcome!
        </h2>

        {/* Brief Description */}
        <p className="text-gray-600 text-center mb-8">
          Sign in with your Google account to access all our website resources,
          absolutely free. Enjoy modules, tips, notes, and more in one place!
        </p>

        {/* Sign In with Google Button */}
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition-transform transform hover:scale-105"
        >
          <img
            src="../../public/images/GOOGLE.png"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
