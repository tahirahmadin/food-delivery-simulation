import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

interface SnackbarProps {
  message: string;
  onClose: () => void;
}

export const Snackbar: React.FC<SnackbarProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-up">
      <CheckCircle className="w-5 h-5" />
      <span>{message}</span>
    </div>
  );
};