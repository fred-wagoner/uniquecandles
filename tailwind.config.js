/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    extend:{
      colors:{
        'themeyellow': '#a69f7d',
        alexbrush: ['Alex Brush', 'cursive'],
        abel: ['Abel','sans-serif'],
        playwrite: ['Playwrite NZ Guides', 'cursive'],
      },
    }, 
  },
  plugins: [],
}

