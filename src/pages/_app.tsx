import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { GeistSans } from 'geist/font/sans';
import { myFont } from '../styles/fonts';
import { useReportWebVitals } from 'next/web-vitals';

export default function App({ Component, pageProps }: AppProps) {
    useReportWebVitals((metric) => {
        console.log(metric);
    });

    return (
        <main className={`${GeistSans.className} ${myFont.variable}`}>
            <Component {...pageProps} />
        </main>
    );
}
