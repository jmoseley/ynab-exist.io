import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DollarSign } from 'lucide-react';

const ConnectYNAB: React.FC = () => {
  const navigate = useNavigate();

  const handleConnectYNAB = () => {
    // TODO: Implement YNAB OAuth flow
    // For now, we'll simulate a successful connection
    console.log('Connecting to YNAB...');
    setTimeout(() => {
      navigate('/connect-exist');
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <DollarSign className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h2 className="text-2xl font-bold mb-6">Connect to YNAB</h2>
        <p className="mb-6 text-gray-600">
          Click the button below to connect your YNAB account. This will allow us to sync your transaction data.
        </p>
        <button
          onClick={handleConnectYNAB}
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Connect YNAB Account
        </button>
      </div>
    </div>
  );
};

export default ConnectYNAB;