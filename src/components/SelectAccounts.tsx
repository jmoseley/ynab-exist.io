import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard } from 'lucide-react';

const mockAccounts = [
  { id: 1, name: 'Checking Account' },
  { id: 2, name: 'Savings Account' },
  { id: 3, name: 'Credit Card' },
  { id: 4, name: 'Investment Account' },
];

const SelectAccounts: React.FC = () => {
  const [selectedAccounts, setSelectedAccounts] = useState<number[]>([]);
  const navigate = useNavigate();

  const handleAccountToggle = (accountId: number) => {
    setSelectedAccounts(prev =>
      prev.includes(accountId)
        ? prev.filter(id => id !== accountId)
        : [...prev, accountId]
    );
  };

  const handleSubmit = () => {
    // TODO: Save selected accounts to user profile
    console.log('Selected accounts:', selectedAccounts);
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <CreditCard className="w-16 h-16 text-blue-500 mx-auto mb-6" />
        <h2 className="text-2xl font-bold mb-6 text-center">Select YNAB Accounts</h2>
        <p className="mb-4 text-gray-600 text-center">
          Choose the accounts you want to sync with Exist.io:
        </p>
        <div className="space-y-2 mb-6">
          {mockAccounts.map(account => (
            <label key={account.id} className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                checked={selectedAccounts.includes(account.id)}
                onChange={() => handleAccountToggle(account.id)}
              />
              <span className="text-gray-900 font-medium">{account.name}</span>
            </label>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          disabled={selectedAccounts.length === 0}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SelectAccounts;