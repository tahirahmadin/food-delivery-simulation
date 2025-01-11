import React, { useEffect, useState } from 'react';
import { DollarSign } from 'lucide-react';

interface CoinAnimationProps {
  startPosition: { x: number; y: number };
  endPosition: { x: number; y: number };
  amount: number;
  onComplete: () => void;
}

export const CoinAnimation: React.FC<CoinAnimationProps> = ({
  startPosition,
  endPosition,
  amount,
  onComplete
}) => {
  const [coins, setCoins] = useState<Array<{ id: number; delay: number; offsetX: number; offsetY: number }>>([]);
  const [showAmount, setShowAmount] = useState(false);
  
  useEffect(() => {
    // Create 5 coins with different delays and random offsets
    const newCoins = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      delay: i * 150,
      offsetX: Math.random() * 40 - 20,
      offsetY: Math.random() * 40 - 20
    }));
    setCoins(newCoins);

    // Show amount after a short delay
    setTimeout(() => setShowAmount(true), 100);
    
    // Clean up animation after all coins are collected
    const timeout = setTimeout(() => {
      onComplete();
    }, 1500);
    
    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <>
      {coins.map(coin => {
        const tx = endPosition.x - startPosition.x;
        const ty = endPosition.y - startPosition.y;

        return (
          <div
            key={coin.id}
            className="fixed pointer-events-none z-50"
            style={{
              '--tx': tx + coin.offsetX,
              '--ty': ty + coin.offsetY,
              left: startPosition.x,
              top: startPosition.y,
              animation: `collectCoin 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
              animationDelay: `${coin.delay}ms`
            } as React.CSSProperties}
          >
            <div 
              className="w-6 h-6 rounded-full flex items-center justify-center shadow-lg"
              style={{
                background: 'linear-gradient(90deg, #ffd700, #fff4b3, #ffd700)',
                backgroundSize: '300% 100%',
                animation: 'coinShine 2s linear infinite'
              }}
            >
              <DollarSign className="w-4 h-4 text-yellow-700" />
            </div>
          </div>
        );
      })}
      {showAmount && (
        <div
          className="fixed pointer-events-none z-50 font-bold text-lg"
          style={{
            left: startPosition.x,
            top: startPosition.y - 20,
            color: '#ffd700',
            textShadow: '0 0 10px rgba(255, 215, 0, 0.5)',
            animation: 'collectCoin 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
            '--tx': endPosition.x - startPosition.x,
            '--ty': endPosition.y - startPosition.y - 50
          } as React.CSSProperties}
        >
          +${amount.toFixed(2)}
        </div>
      )}
    </>
  );
};