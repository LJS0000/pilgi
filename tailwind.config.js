/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      colors: {
        background: '#F9FAE9',
        text: '#202020',
        subtext: '#606060',
        primary: '#0091FF',
        warning: '#FFC700',
      },
    },
  },
  plugins: [],
};
