// styles/fonts.ts
import localFont from 'next/font/local';

const myFont = localFont({
    src: [
        {
            path: '../../public/fonts/PPSupplySans-Variable.ttf',
            weight: '300',
            style: 'light',
        },
        {
            path: '../../public/fonts/PPSupplySans-Variable.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/PPSupplySans-Variable.ttf',
            weight: '500',
            style: 'medium',
        },
        {
            path: '../../public/fonts/PPSupplySans-Variable.ttf',
            weight: '600',
            style: 'semi-bold',
        },
        {
            path: '../../public/fonts/PPSupplySans-Variable.ttf',
            weight: '700',
            style: 'bold',
        },
    ],
    variable: '--my-font',
});

export { myFont };
