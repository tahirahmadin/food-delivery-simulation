import React, { useEffect, useRef } from 'react';
import { Cloud } from 'lucide-react';

interface RainDroplet {
  x: number;
  y: number;
  speed: number;
  size: number;
}

export const RainEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const raindrops = useRef<RainDroplet[]>([]);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize raindrops
    const initRaindrops = () => {
      raindrops.current = Array(100).fill(null).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 5 + 10,
        size: Math.random() * 2 + 1
      }));
    };
    initRaindrops();

    // Start rain sound
    if (audioRef.current) {
      audioRef.current.volume = 0.1; // Reduce volume to 10%
      audioRef.current.play();
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(200, 200, 255, 0.3)';
      ctx.strokeStyle = 'rgba(200, 200, 255, 0.3)';

      raindrops.current.forEach(drop => {
        // Draw raindrop
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + drop.size, drop.y + drop.size * 4);
        ctx.stroke();

        // Update position
        drop.y += drop.speed;
        if (drop.y > canvas.height) {
          drop.y = -10;
          drop.x = Math.random() * canvas.width;
        }
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <>
      {/* Floating Clouds */}
      <div className="absolute top-4 right-4 pointer-events-none z-30">
        <div className="relative animate-float-1">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/rainy-cloud-3d-icon-download-in-png-blend-fbx-gltf-file-formats--weather-rain-raining-pack-nature-icons-6454412.png"
            alt="Rain Cloud"
            className="w-32 h-32 object-contain"
          />
          <div className="absolute -bottom-2 inset-x-0 h-8 bg-gradient-to-b from-gray-600/40 to-transparent" />
        </div>
      </div>
      
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-30"
        style={{ width: '100%', height: '100%' }}
      />
      <audio
        ref={audioRef}
        src="https://assets.mixkit.co/active_storage/sfx/2515/2515-preview.mp3"
        loop
        preload="auto"
        volume="0.05"
      />
    </>
  );
};