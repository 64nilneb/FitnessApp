/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: '#F9FAF7',
        foreground: '#1C1C1E',
        primary: '#1DB954',
        'primary-foreground': '#ffffff',
        secondary: '#E5E7EB',
        muted: '#E5E7EB',
        'muted-foreground': '#6B7280',
        accent: '#D4AF37',
        card: '#ffffff',
        border: 'rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        lg: '1rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
};
