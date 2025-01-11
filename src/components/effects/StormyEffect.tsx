import React, { useEffect, useRef } from 'react';
import { Cloud } from 'lucide-react';

interface LightningBolt {
  x: number;
  y: number;
  opacity: number;
  duration: number;
  branches: Array<{ x: number; y: number }>;
}

export const StormyEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const thunderRef = useRef<HTMLAudioElement>(null);
  const rainRef = useRef<HTMLAudioElement>(null);
  const lightningRef = useRef<LightningBolt[]>([]);
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

    // Start ambient rain sound
    if (rainRef.current) {
      rainRef.current.volume = 0.1; // Reduce volume to 10%
      rainRef.current.play();
    }

    // Create lightning branches
    const createBranches = (startX: number, startY: number, count: number = 3): Array<{ x: number; y: number }> => {
      const branches = [];
      for (let i = 0; i < count; i++) {
        const angle = (Math.random() - 0.5) * Math.PI / 2;
        const length = Math.random() * 100 + 50;
        branches.push({
          x: startX + Math.sin(angle) * length,
          y: startY + Math.cos(angle) * length
        });
      }
      return branches;
    };

    // Create lightning effect
    const createLightning = () => {
      // Start lightning from the cloud position (top-right)
      const cloudX = canvas.width - 160; // Adjust based on cloud position
      const cloudY = 80; // Adjust based on cloud position
      const x = cloudX + (Math.random() * 80 - 40); // Random spread around cloud
      const bolt: LightningBolt = {
        x,
        y: cloudY,
        opacity: 1,
        duration: Math.random() * 200 + 100,
        branches: createBranches(x, cloudY + 100)
      };
      lightningRef.current.push(bolt);

      // Flash effect
      canvas.style.filter = 'brightness(1.5)';
      setTimeout(() => {
        canvas.style.filter = 'brightness(1)';
      }, 50);

      // Play thunder sound with realistic delay
      if (thunderRef.current) {
        thunderRef.current.volume = Math.random() * 0.1 + 0.1; // Reduce thunder volume
        thunderRef.current.playbackRate = Math.random() * 0.4 + 0.8;
        setTimeout(() => {
          thunderRef.current?.play();
        }, Math.random() * 2000 + 1000);
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw lightning bolts
      lightningRef.current.forEach((bolt, index) => {
        // Main bolt
        ctx.strokeStyle = `rgba(255, 255, 255, ${bolt.opacity * 0.7})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.6)';
        ctx.shadowBlur = 10;
        
        ctx.beginPath();
        ctx.moveTo(bolt.x, bolt.y);
        
        let y = bolt.y;
        const segments = 8;
        const heightPerSegment = canvas.height / segments;
        
        for (let i = 0; i < segments; i++) {
          const x = bolt.x + (Math.random() - 0.5) * 30;
          y += heightPerSegment;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
        
        // Draw branches
        ctx.lineWidth = 1;
        bolt.branches.forEach(branch => {
          ctx.beginPath();
          ctx.moveTo(bolt.x, bolt.y + 50);
          ctx.lineTo(branch.x, branch.y);
          ctx.stroke();
        });

        // Update opacity
        bolt.opacity -= 2.5 / bolt.duration;
        if (bolt.opacity <= 0) {
          lightningRef.current.splice(index, 1);
        }
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };
    animate();

    // Create lightning periodically with random intervals
    const createRandomLightning = () => {
      createLightning();
      const nextInterval = Math.random() * 5000 + 3000;
      setTimeout(createRandomLightning, nextInterval);
    };
    setTimeout(createRandomLightning, Math.random() * 2000);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (thunderRef.current) {
        thunderRef.current.pause();
        thunderRef.current.currentTime = 0;
      }
      if (rainRef.current) {
        rainRef.current.pause();
        rainRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <>
      {/* Stormy Clouds */}
      <div className="absolute top-4 right-4 pointer-events-none z-30">
        <div className="relative animate-float-1">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-thunderstorm-3d-icon-download-in-png-blend-fbx-gltf-file-formats--thunder-storm-dark-environment-day-weather-night-objects-pack-nature-icons-7097176.png"
            alt="Storm Cloud"
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
        ref={thunderRef}
        src="https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"
        preload="auto"
        volume="0.1"
      />
      <audio
        ref={rainRef}
        src="https://assets.mixkit.co/active_storage/sfx/2515/2515-preview.mp3"
        loop
        preload="auto"
        volume="0.1"
      />
      {/* Dark storm overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/20 pointer-events-none z-20" />
    </>
  );
};