// styles/fonts.ts
import localFont from 'next/font/local';

const myFont = localFont({
    src: [
        {
            path: '../../public/fonts/supply-sans.woff2',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--my-font',
});

export { myFont };
