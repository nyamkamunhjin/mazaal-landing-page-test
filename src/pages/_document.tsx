import { Html, Head, Main, NextScript } from 'next/document';
import { myFont } from '../styles/fonts';

export default function Document() {
    return (
        <Html lang="en" className={`${myFont.className}`}>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
