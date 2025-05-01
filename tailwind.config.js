/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Строго черно-белая палитра
        primary: '#000000',
        secondary: '#ffffff',
        // Оттенки серого для UI элементов
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#000000',
            a: {
              color: '#000000',
              '&:hover': {
                color: '#404040',
              },
              textDecoration: 'underline',
            },
            strong: {
              color: '#000000',
              fontWeight: '700',
            },
            h1: {
              color: '#000000',
              fontWeight: '700',
            },
            h2: {
              color: '#000000',
              fontWeight: '600',
            },
            h3: {
              color: '#000000',
              fontWeight: '600',
            },
            h4: {
              color: '#000000',
              fontWeight: '600',
            },
            blockquote: {
              color: '#404040',
              borderLeftColor: '#e5e5e5',
            },
            code: {
              color: '#000000',
              backgroundColor: '#f5f5f5',
            },
            pre: {
              backgroundColor: '#f5f5f5',
              color: '#000000',
            },
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
