/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#0F52BA', // Bold blue
          'light': '#3B82F6',
          'dark': '#0A3A8C',
        },
        'secondary': {
          DEFAULT: '#FF6B35', // Vibrant orange
          'light': '#FF8C5A',
          'dark': '#E54E1B',
        },
        'accent': {
          DEFAULT: '#7209B7', // Bold purple
          'light': '#9D4EDD',
          'dark': '#560A86',
        },
        'neon': {
          'pink': '#FF00FF',
          'blue': '#00FFFF',
          'green': '#00FF00',
          'yellow': '#FFFF00',
          'purple': '#9D4EDD',
        },
        'dark': {
          DEFAULT: '#121212',
          'light': '#2D2D2D',
          'lighter': '#3D3D3D',
        },
        'light': {
          DEFAULT: '#F8FAFC',
          'dark': '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      fontVariationSettings: {
        'normal': 'normal',
        'italic': 'italic',
        'wght-100': '"wght" 100',
        'wght-900': '"wght" 900',
        'opsz-min': '"opsz" 9',
        'opsz-max': '"opsz" 144',
        'soft-0': '"SOFT" 0',
        'soft-100': '"SOFT" 100',
        'wonk-0': '"WONK" 0',
        'wonk-1': '"WONK" 1',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'text-shimmer': 'textShimmer 5s ease infinite',
        'char-float': 'charFloat 3s ease-in-out infinite',
        'text-wave': 'textWave 3s ease-in-out infinite',
        'text-bounce': 'textBounce 2s ease-in-out infinite',
        'text-rotate': 'textRotate 6s linear infinite',
        'text-blur': 'textBlur 5s ease-in-out infinite',
        'text-stretch': 'textStretch 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        textShimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        charFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        textWave: {
          '0%, 100%': { transform: 'skewX(0deg)' },
          '25%': { transform: 'skewX(5deg)' },
          '75%': { transform: 'skewX(-5deg)' },
        },
        textBounce: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.1)' },
        },
        textRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        textBlur: {
          '0%, 100%': { filter: 'blur(0px)' },
          '50%': { filter: 'blur(4px)' },
        },
        textStretch: {
          '0%, 100%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(1.2)' },
        },
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '200%': '200%',
      },
    },
  },
  safelist: [
    'text-dark-DEFAULT',
    'bg-light',
    'text-primary',
    'text-primary-light',
    'text-primary-dark',
    'bg-primary',
    'bg-primary-light',
    'bg-primary-dark',
    'text-secondary',
    'text-secondary-light',
    'text-secondary-dark',
    'bg-secondary',
    'bg-secondary-light',
    'bg-secondary-dark',
    'text-accent',
    'text-accent-light',
    'text-accent-dark',
    'bg-accent',
    'bg-accent-light',
    'bg-accent-dark',
    'text-dark-light',
    'text-dark-lighter',
    'bg-dark-DEFAULT',
    'bg-dark-light',
    'bg-dark-lighter',
    'text-light-DEFAULT',
    'text-light-dark',
    'bg-light-DEFAULT',
    'bg-light-dark',
    'font-serif',
    'font-thin',
    'font-black',
    'italic',
    'not-italic',
    'tracking-tighter',
    'tracking-wider',
  ],
  plugins: [],
} 