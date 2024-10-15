import React from 'react';
import { ArrowRightLeft, CheckCircle } from 'lucide-react';
import { useUser } from '@clerk/clerk-react';

const Dashboard: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">YNAB - Exist.io Sync Dashboard</h1>
        
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Welcome, {user?.firstName || 'User'}!</h2>
            <CheckCircle className="w-6 h-6 text-green-500" />
          </div>
          <p className="text-gray-600">Your accounts are syncing successfully.</p>
        </div>
        
        {/* Rest of the Dashboard component remains the same */}
      </div>
    </div>
  );
};

export default Dashboard;