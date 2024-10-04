// components/join/SignUpModal.tsx
import { signIn } from 'next-auth/react';
import React from 'react';

interface ModalProps {
  onClose: () => void;
}

const SignUpModal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 transition-opacity">
      <div className="relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md transform transition-all scale-100">
        
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Sign Up
          </h2>

          <p className="mb-6 text-gray-700 dark:text-gray-400">
            Already a member? 
            <span className="text-blue-500 cursor-pointer ml-1">Log In</span>
          </p>
          
          {/* Google Sign Up */}
          <button
            onClick={() => signIn('google')}
            className="w-full bg-red-600 text-white py-3 mb-4 rounded-lg shadow-lg hover:bg-red-700 transition-colors"
          >
            Sign up with Google
          </button>
          
          {/* Facebook Sign Up */}
          <button
            onClick={() => signIn('facebook')}
            className="w-full bg-blue-600 text-white py-3 mb-4 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
          >
            Sign up with Facebook
          </button>

          <div className="flex items-center justify-between my-4">
            <hr className="w-full border-gray-300" />
            <span className="px-2 text-gray-500">or</span>
            <hr className="w-full border-gray-300" />
          </div>

          {/* Email Sign Up */}
          <button className="w-full bg-gray-200 text-black py-3 rounded-lg shadow-lg hover:bg-gray-300 transition-colors">
            Sign up with email
          </button>

          {/* Public Profile Checkbox */}
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600"/>
              <span className="ml-2">
                Sign up to this site with a public profile.
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
