'use client'
import React from 'react';
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';

const SignUpCard: React.FC = () => {
  const router = useRouter()

  const handleGoogleSignUp = async () => {
    const result = await signIn('google', { redirect: false, callbackUrl: '/payment' });
    if (result?.ok) {
      router.push(result.url || '/payment'); 
    } else {
      console.error('Google sign-up failed');
    }
  };
  
  const handleFacebookSignUp = async () => {
    const result = await signIn('facebook', { redirect: false, callbackUrl: '/payment' });
    if (result?.ok) {
      router.push(result.url || '/payment'); 
    } else {
      console.error('Facebook sign-up failed');
    }
  };
  

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 transition-opacity">
      <div className="relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md transform transition-all scale-100">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center">
          Sign Up
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-400 text-center">
          Already a member?
          <span className="text-blue-500 cursor-pointer ml-1">Log In</span>
        </p>
        <button
          onClick={handleGoogleSignUp}
          className="w-full bg-red-600 text-white py-3 mb-4 rounded-lg shadow-lg hover:bg-red-700 transition-colors"
        >
          Continue with Google
        </button>
        <button
          onClick={handleFacebookSignUp}
          className="w-full bg-blue-600 text-white py-3 mb-4 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          Continue with Facebook
        </button>
        <div className="flex items-center justify-between my-4">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-500">or</span>
          <hr className="w-full border-gray-300" />
        </div>
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="ml-2">Sign up to this site with a public profile.</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SignUpCard;
