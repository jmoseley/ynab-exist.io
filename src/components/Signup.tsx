import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const Signup: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <SignUp
          routing="path"
          path="/signup"
          signInUrl="/signin"
          afterSignUpUrl="/connect-ynab"
        />
      </div>
    </div>
  );
};

export default Signup;