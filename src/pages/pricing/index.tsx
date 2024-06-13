import { Inter } from 'next/font/google';
import { Layout } from '../../components/layout';
import { Pricing } from '../../components/pricing';

const inter = Inter({ subsets: ['latin'] });

export default function PricingPage() {
    return (
        <Layout>
            <Pricing />
        </Layout>
    );
}
