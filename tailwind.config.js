/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        'gradient-to-b': 
                'linear-gradient(to bottom ,rgba(20, 20, 20, 0) 0, rgba(20, 20, 20, .15) 20%, rgba(20, 20, 20, .35) 33%,rgba(20, 20, 20, .58) 44%, #141414 70%, #141414 100% );'
      },
    },
  },
  plugins: [],
}
