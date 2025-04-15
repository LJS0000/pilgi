/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      colors: {
        page: 'var(--bg-page)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        main: 'var(--color-main)',
        warning: 'var(--color-warning)',
      },
    },
  },
  plugins: [],
};
