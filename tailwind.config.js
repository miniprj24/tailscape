export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        slideLeft: {
          'from': { transform: 'translateX(100%)' },
          'to': { transform: 'translateX(0)' },
        },
        slideRight: {
          'from': { transform: 'translateX(-100%)' },
          'to': { transform: 'translateX(0)' },
        },
        slideUp: {
          'from': { transform: 'translateY(100%)' },
          'to': { transform: 'translateY(0)' },
        },
        slideDown: {
          'from': { transform: 'translateY(-100%)' },
          'to': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}