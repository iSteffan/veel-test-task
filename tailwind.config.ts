import type { Config } from 'tailwindcss';

const doubleGradient =
  'linear-gradient(90deg, rgba(0, 0, 0, 0) 33%, rgba(186, 186, 186, 0.4) 33.2%, rgba(0, 0, 0, 0) 33.3%, rgba(0, 0, 0, 0) 66%, rgba(186, 186, 186, 0.4) 66.2%, rgba(0, 0, 0, 0) 66.3%)';
const tripleGradient =
  'linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 25%, rgba(186, 186, 186, 0.4) 25.1%, rgba(186, 186, 186, 0.4) 25.2%, rgba(0, 0, 0, 0) 25.3%, rgba(0, 0, 0, 0) 50%, rgba(186, 186, 186, 0.4) 50.1%, rgba(186, 186, 186, 0.4) 50.2%, rgba(0, 0, 0, 0) 50.3%, rgba(0, 0, 0, 0) 75%, rgba(186, 186, 186, 0.4) 75.1%, rgba(186, 186, 186, 0.4) 75.2%, rgba(0, 0, 0, 0) 75.3%, rgba(0, 0, 0, 0))';

export default {
  content: [
    './src/component/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        mont: ['var(--font-montserrat)'],
        film: ['var(--font-filmP3)'],
      },
      fontWeight: {
        '700': '700',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        accentYellow: '#F3C653',
        lemonBg: '#FFFDEE',
        darkBg: '#0E0C07',
      },
      backgroundImage: {
        'double-gradient': ` ${doubleGradient}`,
        'triple-gradient': ` ${tripleGradient}`,
      },
    },
  },
  plugins: [],
} satisfies Config;
