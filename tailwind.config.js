/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(#ed536a, #f78a69, #f0c994)',
        'custom1-gradient': 'linear-gradient(#003CB1, #009DE0, #17C7FA)',
      },
      backgroundColor: {
        theme: '#f0f0f0',
        theme1: '#333',
        theme2: '#525252',
        personalcontactcard: '#25e6d9'
      },
      colors: {
        darkblue: "#0065AF",
      },
      width: {
        17: '17.3rem',
        p7: '7.5rem'
      },
      height: {
        100: '100vh',
        30: '40rem',
        42: '42.5rem',
        h30: '34rem',
        19: '19rem'
      },
      margin: {
        m4: '4.5rem',
        m7: '7.7rem'
      },
      padding: {
        p3: '3.7rem'
      },
      borderRadius: {
        2: '2.5rem',
        b1: '1.2rem',
        b5: '5rem',
      },
    },
  },
  plugins: [],
};
