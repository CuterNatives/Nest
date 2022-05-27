module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pr': {
          '50': '#f5f5ff', 
          '100': '#ebecff', 
          '200': '#cdcffe', 
          '300': '#afb2fe', 
          '400': '#7479fd', 
          '500': '#383ffc', 
          '600': '#3239e3', 
          '700': '#2a2fbd', 
          '800': '#222697', 
          '900': '#1b1f7b'
      }

    },
      
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}