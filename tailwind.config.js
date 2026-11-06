/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'warm-beige': '#E8D8C3',
        'creamy-white': '#FFF9F0',
        'chocolate-brown': '#4A2E23',
        'deep-espresso': '#2B1B16',
        'muted-golden': '#C5A46D',
        'soft-caramel': '#B8875B',
        // Semantic aliases
        beige: '#E8D8C3',
        cream: '#FFF9F0',
        chocolate: '#4A2E23',
        espresso: '#2B1B16',
        gold: '#C5A46D',
        caramel: '#B8875B',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        italic: ['"Playfair Display"', 'serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-xl': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'subheading': ['clamp(1.15rem, 2vw, 1.5rem)', { lineHeight: '1.4' }],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(43, 27, 22, 0.12)',
        'luxury-lg': '0 30px 60px -20px rgba(43, 27, 22, 0.22)',
        'gold-glow': '0 0 25px rgba(197, 164, 109, 0.25)',
        'card': '0 8px 30px rgba(74, 46, 35, 0.08)',
      },
      borderRadius: {
        'editorial': '1.25rem',
        'editorial-lg': '2rem',
      },
    },
  },
  plugins: [],
};
