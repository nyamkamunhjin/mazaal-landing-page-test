import { Workflow } from '../components/workflow';
import { Features } from '../components/features';
import { Hero } from '../components/hero';
import { UseCase } from '../components/use-case';
import { TrustedBy } from '../components/trusted-by';
import { CallToAction } from '../components/call-to-action';
import { Layout } from '../components/layout';

export default function HomePage() {
    return (
        <Layout
            meta={{
                title: 'Mazaal AI: End to End No-Code AI Platform',
                description:
                    'Experience the transformative power of AI with Mazaal. Our no-code platform offers a simple, affordable way to leverage AI for your business.',
                image: `${process.env.URL}/mazaal-screen-image.jpeg`,
                url: `${process.env.URL}`,
                keywords: 'ai, automation, business, easy',
            }}
        >
            <div className="tw-my-24">
                <Hero />
            </div>
            <div className=" tw-w-full tw-flex tw-flex-col tw-h-full tw-px-4 tw-bg-gradient-to-b tw-from-white tw-to-bg-tertiary/50">
                <Workflow />
                <Features />
            </div>
            <UseCase />
            <TrustedBy />
            <div className=" tw-max-w-screen-lg tw-w-full tw-mx-auto tw-px-4">
                <CallToAction />
            </div>
        </Layout>
    );
}
