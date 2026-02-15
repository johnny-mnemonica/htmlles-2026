/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [`${process.env.SITE_DIST_PATH}/views/**/*.twig`],
    theme: {
      extend: {
        colors: {
          lightpurple: '#9b83ff',
          darkpurple: '#573e91',
          lightgray: '#e5e5e5'
        }
      },
      screens: {
        'sm': '376px',
        // => @media (min-width: 425px) { ... }

        'smd': '431px',
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
    plugins: [],
  }