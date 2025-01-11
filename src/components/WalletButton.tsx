import React from 'react';
import { Wallet } from 'lucide-react';
import { useWallet } from '../hooks/useWallet';

export const WalletButton: React.FC = () => {
  const { account, error, connectWallet, disconnectWallet } = useWallet();

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="relative">
      {error && (
        <div className="absolute bottom-full mb-2 p-2 bg-red-500 text-white rounded text-sm">
          {error}
        </div>
      )}
      <button
        onClick={account ? disconnectWallet : connectWallet}
        className="flex items-center gap-2 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
      >
        <Wallet className="w-5 h-5" />
        <span>{account ? formatAddress(account) : 'Connect Wallet'}</span>
      </button>
    </div>
  );
};