/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Tajawal', 'Inter', ...defaultTheme.fontFamily.sans],
        heading: ['"Plus Jakarta Sans"', 'Tajawal', ...defaultTheme.fontFamily.sans],
        body: ['Inter', 'Tajawal', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Deep Midnight Navy & Surfaces
        'brand-dark': '#0A0B14',
        'brand-surface': '#111322',
        'brand-surface-elevated': '#16192E',
        
        // Brand Accents
        'brand-blue': '#2563EB',
        'brand-blue-dark': '#1D4ED8',
        'brand-purple': '#8B5CF6',
        'brand-purple-dark': '#9333EA',

        // Typography
        'brand-text': '#FFFFFF',
        'brand-body': '#94A3B8',
        'brand-muted': '#64748B',

        // Legacy mappings to preserve compatibility with existing classes
        'light-theme-purple': '#16192E',
        'theme-purple': '#8B5CF6',
        'dark-theme-purple': '#7C3AED',
        'theme-blue': '#FFFFFF',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%)',
        'brand-gradient-hover': 'linear-gradient(135deg, #1D4ED8 0%, #7C3AED 100%)',
        'brand-gradient-subtle': 'linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
      },
      boxShadow: {
        'brand-glow': '0 0 25px rgba(139, 92, 246, 0.35)',
        'brand-glow-blue': '0 0 25px rgba(37, 99, 235, 0.35)',
        'brand-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'bounce-x': 'bouncex 1s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float-slow': 'floatSlow 5s ease-in-out infinite',
      },
      keyframes: {
        bouncex: {
          '0%, 100%': {
            transform: 'translateX(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      spacing: {
        71: '17.75rem',
        95: '23.5rem',
        192: '48rem',
        192.5: '49.5rem',
        193: '51rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};

