/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        roadStripe: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '100%': { transform: 'translateX(100%) translateY(100%)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translate(-50%, 100%)' },
          '100%': { opacity: '1', transform: 'translate(-50%, 0)' }
        },
        floatAnimation1: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        floatAnimation2: {
          '0%, 100%': { transform: 'translateY(-5px)' },
          '50%': { transform: 'translateY(5px)' }
        },
        floatAnimation3: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' }
        },
        roadStripeFast: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '100%': { transform: 'translateX(200%) translateY(200%)' }
        }
      },
      animation: {
        'roadStripe': 'roadStripe 1.5s linear infinite',
        'roadStripeFast': 'roadStripeFast 0.8s linear infinite',
        'fade-in-up': 'fadeInUp 0.3s ease-out',
        'spin-slow': 'spin 20s linear infinite',
        'float-1': 'floatAnimation1 3s ease-in-out infinite',
        'float-2': 'floatAnimation2 4s ease-in-out infinite',
        'float-3': 'floatAnimation3 5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};