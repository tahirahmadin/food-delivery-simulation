import React, { useEffect, useRef } from 'react';
import { Music, Music2 } from 'lucide-react';

const MUSIC_URL = 'https://assets.mixkit.co/music/preview/mixkit-coffee-shop-light-background-jazz-276.mp3';

export const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // Set initial volume to 20%
      
      // Load the audio file
      audioRef.current.load();
      
      audioRef.current.addEventListener('canplaythrough', () => {
        setIsLoaded(true);
      });
      
      // Handle audio end
      audioRef.current.addEventListener('ended', () => {
        audioRef.current?.play();
      });
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const toggleMusic = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          await audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    }
  };

  return (
    <>
      <button
        disabled={!isLoaded}
        onClick={toggleMusic}
        className={`bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-2 rounded-lg transition-all duration-200 shadow-sm
          ${isLoaded ? 'hover:from-purple-600 hover:to-indigo-600 hover:shadow-md' : 'opacity-50 cursor-not-allowed'}`}
      >
        {isPlaying ? (
          <Music2 className="w-5 h-5" />
        ) : (
          <Music className="w-5 h-5" />
        )}
      </button>
      <audio
        ref={audioRef}
        src={MUSIC_URL}
        loop
        preload="auto"
      />
    </>
  );
};