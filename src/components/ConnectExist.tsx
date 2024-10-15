import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart2 } from 'lucide-react';

const ConnectExist: React.FC = () => {
  const navigate = useNavigate();

  const handleConnectExist = () => {
    // TODO: Implement Exist.io OAuth flow
    // For now, we'll simulate a successful connection
    console.log('Connecting to Exist.io...');
    setTimeout(() => {
      navigate('/select-accounts');
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <BarChart2 className="w-16 h-16 text-purple-500 mx-auto mb-6" />
        <h2 className="text-2xl font-bold mb-6">Connect to Exist.io</h2>
        <p className="mb-6 text-gray-600">
          Click the button below to connect your Exist.io account. This will allow us to sync your financial data.
        </p>
        <button
          onClick={handleConnectExist}
          className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          Connect Exist.io Account
        </button>
      </div>
    </div>
  );
};

export default ConnectExist;