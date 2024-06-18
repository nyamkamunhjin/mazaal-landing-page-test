import { Layout } from '../../components/layout';
import { Pricing } from '../../components/pricing';

export default function PricingPage() {
    return (
        <Layout
            meta={{
                title: 'Mazaal AI - Pricing',
                description:
                    'Experience the transformative power of AI with Mazaal. Our no-code platform offers a simple, affordable way to leverage AI for your business.',
                image: `${process.env.URL}/mazaal-screen-image.jpeg`,
                url: `${process.env.URL}`,
                keywords: 'ai, automation, business, easy, pricing',
            }}
        >
            <Pricing />
        </Layout>
    );
}
