import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { GeistSans } from 'geist/font/sans';
import { myFont } from '../styles/fonts';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${GeistSans.className} ${myFont.variable}`}>
            <Component {...pageProps} />
            <SpeedInsights />
        </main>
    );
}
