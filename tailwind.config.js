// tailwind.config.js
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        'earth-green': '#A3B18A',
        'soft-amber': '#F6E2B3',
        'warm-terra': '#DDBEA9',
        'dusty-blue': '#ADC8C8',
        'neutral-dark': '#333333',
        'stone-50': '#F5F5F2',
        'dark-green': '#507446'
      },
      spacing: {
        '128': '32rem',
        '144': '36rem'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'floatSlow 10s ease-in-out infinite'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        lg: '0.75rem'
      }
    }
  },
  plugins: []
}