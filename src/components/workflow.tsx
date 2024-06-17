/* eslint-disable @next/next/no-img-element */
import {
    EnvelopeIcon,
    MegaphoneIcon,
    PhoneIcon,
    PhotoIcon,
    PresentationChartBarIcon,
    ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import {
    CodeBracketIcon,
    CogIcon,
    CurrencyDollarIcon,
} from '@heroicons/react/24/outline';
import React, { FC, useState } from 'react';
import { BsMegaphone, BsMegaphoneFill } from 'react-icons/bs';
import {
    FaCalculator,
    FaChartArea,
    FaFile,
    FaHandshake,
    FaLightbulb,
    FaMegaport,
} from 'react-icons/fa';
import { WorkflowCard, WorkflowCardProps } from './workflow-card';
import { FaPlugCirclePlus, FaWandMagicSparkles } from 'react-icons/fa6';
import { LuPackageCheck } from 'react-icons/lu';

interface IProps {}

/**
 * @author
 * @function @Header
 **/

const cases = [
    {
        name: 'Marketing',
        icon: <MegaphoneIcon className="w-5 h-5" />,
        image: '/images/workflow/marketing.avif',
        disabled: false,
        meta: {
            person: {
                name: 'John Doe',
                avatar: '/static/avatars/000f.jpg',
                profession: 'Marketer',
            },
            item1: {
                title: 'Automated Content Creation',
                description:
                    'Utilize AI to generate engaging content for blogs social media, and email campaigns.',
                icon: <FaFile className="w-10 h-10 text-primary" />,
            },
            item2: {
                title: 'Customer Insights',
                description:
                    'Anaylyze customer data with deep learning to unconver trends and personalize marketing strategies.',
                icon: <FaLightbulb className="w-10 h-10 text-primary" />,
            },
            item3: {
                title: 'Campaign Optimization',
                description:
                    'Use AI to test and optimize different marketing campaings for better conversion rates.',
                icon: <BsMegaphoneFill className="w-10 h-10 text-primary" />,
            },
        } as WorkflowCardProps,
    },
    {
        name: 'Sales',
        icon: <PresentationChartBarIcon className="w-5 h-5" />,
        disabled: false,
        image: '/images/workflow/sales.avif',
        meta: {
            person: {
                name: 'Jane Smith',
                avatar: '/static/avatars/001f.jpg',
                profession: 'Sales Lead',
            },
            item1: {
                title: 'Predictive Lead Scoring',
                description:
                    'Implement Al algorithms to score leads based on their likelihood to convert, helping sales teams prioritize their efforts.',
                icon: <FaCalculator className="w-10 h-10 text-primary" />,
            },
            item2: {
                title: 'Al-Powered Sales',
                description:
                    'Chatbots and virtual assistants can engage with prospects, answer questions, and schedule meetings.',
                icon: <FaHandshake className="w-10 h-10 text-primary" />,
            },
            item3: {
                title: 'Sales Forecasting',
                description:
                    'Employ deep learning to forecast sales trends and set accurate targets.',
                icon: <FaChartArea className="w-10 h-10 text-primary" />,
            },
        } as WorkflowCardProps,
    },
    {
        name: 'Operations',
        icon: <CogIcon className="w-5 h-5" />,
        disabled: false,
        image: '/images/workflow/operations.avif',
        meta: {
            person: {
                name: 'Jakob Levi',
                avatar: '/static/avatars/007m.jpg',
                profession: 'Business Lead',
            },
            item1: {
                title: 'Process Automation',
                description:
                    'Streamline operations by automating routine tasks and workflows with Al.',
                icon: (
                    <FaWandMagicSparkles className="w-10 h-10 text-primary" />
                ),
            },
            item2: {
                title: 'Supply Chain Optimization',
                description:
                    'Use predictive analytics to manage inventory levels and optimize supply chain logistics.',
                icon: <LuPackageCheck className="w-10 h-10 text-primary" />,
            },
            item3: {
                title: 'Data Integration',
                description:
                    'Enable seamless data sharing across platforms and departments without manual intervention.',
                icon: <FaPlugCirclePlus className="w-10 h-10 text-primary" />,
            },
        } as WorkflowCardProps,
    },
    {
        name: 'Tech',
        icon: <CodeBracketIcon className="w-5 h-5" />,
        disabled: true,
    },
    {
        name: 'Finance',
        icon: <CurrencyDollarIcon className="w-5 h-5" />,
        disabled: true,
    },
    {
        name: 'Support',
        icon: <PhoneIcon className="w-5 h-5" />,
        disabled: true,
    },
    {
        name: 'Product',
        icon: <ShoppingBagIcon className="w-5 h-5" />,
        disabled: true,
    },
];

export const Workflow: FC<IProps> = (props) => {
    const [active, setActive] = useState(
        cases.find((each) => each.name === 'Marketing')
    );
    return (
        <div className="md:px-10 py-6 flex flex-col gap-4 items-center h-18 max-w-7xl mx-auto">
            <h1 className="text-black text-3xl font-bold font-mono">
                Build AI Enabled Workflow For Every Use Case
            </h1>
            <div className="bg-gray-100 rounded-xl px-4 py-2 flex flex-wrap flex-1 justify-center gap-2">
                {cases.map((each) => (
                    <button
                        className={`text-base font-medium flex gap-2 items-center px-3 py-3 rounded-lg transition-all  ${
                            active?.name === each.name
                                ? 'text-primary bg-white'
                                : 'text-text-secondary'
                        }`}
                        key={each.name}
                        onClick={() => setActive(each)}
                        disabled={each.disabled}
                    >
                        {each.icon} {each.name}
                    </button>
                ))}
            </div>

            {active?.meta ? <WorkflowCard {...active.meta} /> : null}
        </div>
    );
};
