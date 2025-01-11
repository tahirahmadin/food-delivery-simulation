import { useState, useCallback } from 'react';
import { ethers } from 'ethers';

export const useWallet = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const connectWallet = useCallback(async () => {
    if (!window.ethereum) {
      setError('Please install MetaMask!');
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      setAccount(accounts[0]);
      setError(null);
    } catch (err) {
      setError('Failed to connect wallet');
      console.error(err);
    }
  }, []);

  const disconnectWallet = useCallback(() => {
    setAccount(null);
    setError(null);
  }, []);

  return { account, error, connectWallet, disconnectWallet };
};