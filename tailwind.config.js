module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    screens: {
      '3xl': { 'max': '1920px' },
      // => @media(max-width: 1920px) {...}

      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }
      'xlm': { 'min': '1279px' },
      // => @media (min-width: 1279px) { ... }
      'lg': { 'max': '1024px' },
      // => @media (max-width: 1023px) { ... }
      'hd': { 'max': '940px' },
      // => @media (max-width: 900px) { ... }

      'mdlg': { 'max': '880px' },
      // => @media (max-width: 880px) { ... }
      'mdlgm': { 'min': '880px' },
      // => @media (max-width: 880px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }
      'smd': { 'min': '767px' },
      // => @media (min-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
      'xsm': { 'max': '390px' },
      // => @media (max-width: 639px) { ... }
      'xs': { 'min': '390px' },
      // => @media (min-width: 639px) { ... }

    },
    display: ['Poppins', 'system-ui', 'sans-serif'],
    body: ['Poppins', 'system-ui', 'sans-serif'],
    extend: {
      colors: {
        brand: {
          red: 'var(--red-violet)',
          yellow: 'var(--accent)'
        },
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        playButton: 'var(--accent)'
      },
      border: {
        playButton: '3px solid var(--accent)'
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      boxShadow: {
        'roadmap': '0px 8px 24px 0px rgba(0,0,0,0.1);',
      },
      maxWidth: {
        '8xl': '1564px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          xl: '0rem',
        },
      },
    },
  },
  plugins: [
  ],
}
