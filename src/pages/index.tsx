import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Header } from '../components/header';
import { Workflow } from '../components/workflow';
import { Features } from '../components/features';
import { Hero } from '../components/hero';
import { UseCase } from '../components/use-case';
import { TrustedBy } from '../components/trusted-by';
import { CallToAction } from '../components/call-to-action';
import { Footer } from '../components/footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <main className={`w-full flex flex-col h-full`}>
            <Header />
            <Hero />
            <div className="w-full flex flex-col h-full px-4 bg-gradient-to-b from-white to-bg-tertiary/50">
                <Workflow />
                <Features />
            </div>
            <UseCase />
            <TrustedBy />
            <div className="max-w-screen-lg w-full mx-auto px-4">
                <CallToAction />
                <Footer />
            </div>
        </main>
    );
}
