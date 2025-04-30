/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        // Строго черно-белая палитра с оттенками серого
        'foreground': '#000000',
        'background': '#ffffff',
        'primary': '#000000',
        'secondary': '#666666',
        'accent': '#333333',
        'muted': '#f3f3f3',
        'border': '#e5e5e5',
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            'blockquote p:first-of-type::before': {
              content: '""',
            },
            'blockquote p:last-of-type::after': {
              content: '""',
            },
            img: {
              marginTop: '0',
              marginBottom: '0',
            },
            h1: {
              fontWeight: '700',
            },
            h2: {
              fontWeight: '600',
            },
            h3: {
              fontWeight: '500',
            },
            code: {
              color: '#000000',
              backgroundColor: '#f3f3f3',
              borderRadius: '4px',
              padding: '2px 4px',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
};
