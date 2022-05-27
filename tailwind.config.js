module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pr': {
          '50': '#f7f7fe', 
          '100': '#eff0fe', 
          '200': '#d8d9fc', 
          '300': '#c1c2f9', 
          '400': '#9294f5', 
          '500': '#6366f1', 
          '600': '#595cd9', 
          '700': '#4a4db5', 
          '800': '#3b3d91', 
          '900': '#313276'
      }

    },
      
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}