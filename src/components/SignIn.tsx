import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const SignInPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <SignIn
          routing="path"
          path="/signin"
          signUpUrl="/signup"
          afterSignInUrl="/dashboard"
        />
      </div>
    </div>
  );
};

export default SignInPage;