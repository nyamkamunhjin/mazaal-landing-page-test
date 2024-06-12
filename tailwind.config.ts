import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF6A2A',
                secondary: '#440a0699',
                background: '#FDFAF8',
                'mazaal-primary': '#FF6A2A',
                'mazaal-secondary': '#EF3507',
                'mazaal-tertiary': '#C62308',
                'text-primary': '#440A06',
                'text-secondary': '#B26D5E',
                'text-tertiary': '#B49D9B',
                'text-inverted': '#FFFFFF',
                'bg-primary': '#FFFFFF',
                'bg-secondary': '#FDFAF8',
                'bg-tertiary': '#FFF4ED',
                'border-primary': '#F3EBE8',
                'border-secondary': '#FFF4ED',
            },
        },
    },
    plugins: [],
};
export default config;
