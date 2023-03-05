module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'about': '#00B2FF'
      },
      keyframes: {
        'thumbUp': {
          '0%': {
            transform: 'translateY(-100px)',
          },
          '100%': {
            transform: 'translateY(0)'
          }
        },
        'blindTextCursor': {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        },
        'typeWriter': {
          'from': {
            width: 0
          },
          'to': {
            width: 'fit-content'
          }
        }
      },
      animation: {
        'thumbUp': 'thumbUp 1s ease-in-out',
        'autoTyping': 'blindTextCursor 400ms linear infinite alternate',

      }
    },
  },
  plugins: [],
}