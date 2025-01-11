import React, { useState } from 'react';
import { Bot } from 'lucide-react';
import { ChatBot } from './chat/ChatBot';

export const OrderBot: React.FC = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <div className="fixed bottom-4 right-4 flex items-center gap-2">
        <button
          onClick={() => setShowChat(true)}
          className="bg-purple-500 text-white p-4 rounded-full hover:bg-purple-600 transition-colors"
        >
          <Bot className="w-8 h-8" />
        </button>
        <span className="text-white">Place order bot</span>
      </div>

      {showChat && <ChatBot onClose={() => setShowChat(false)} />}
    </>
  );
};