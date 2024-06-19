import {
    MegaphoneIcon,
    PhoneIcon,
    PresentationChartBarIcon,
    ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import {
    CodeBracketIcon,
    CogIcon,
    CurrencyDollarIcon,
} from '@heroicons/react/24/outline';
import React, { FC, useState } from 'react';
import { BsDatabaseExclamation, BsMegaphoneFill } from 'react-icons/bs';
import {
    FaBook,
    FaCalculator,
    FaChartArea,
    FaCode,
    FaFile,
    FaHandshake,
    FaLightbulb,
    FaMask,
    FaRegChartBar,
    FaRobot,
} from 'react-icons/fa';
import { WorkflowCard, WorkflowCardProps } from './workflow-card';
import {
    FaCodeCompare,
    FaHandshakeSimple,
    FaMagnifyingGlass,
    FaPeopleGroup,
    FaPlugCirclePlus,
    FaTicket,
    FaWandMagicSparkles,
} from 'react-icons/fa6';
import { LuPackageCheck } from 'react-icons/lu';
import { BiPieChart, BiTestTube } from 'react-icons/bi';
import { IoDocument } from 'react-icons/io5';
import { GiReceiveMoney } from 'react-icons/gi';

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
        name: 'IT',
        icon: <CodeBracketIcon className="w-5 h-5" />,
        disabled: false,
        meta: {
            person: {
                name: 'Ethan Thompson',
                avatar: '/static/avatars/014m.jpg',
                profession: 'Lead Engineer',
            },
            item1: {
                title: 'Automated Incident Response',
                description:
                    'Deploy AI to detect and respond to IT incidents in real-time.',
                icon: (
                    <BsDatabaseExclamation className="w-10 h-10 text-primary" />
                ),
            },
            item2: {
                title: 'Cybersecurity Threat Detection',
                description:
                    'Use deep learning models to identify and mitigate potential security threats.',
                icon: <FaCode className="w-10 h-10 text-primary" />,
            },
            item3: {
                title: 'Legacy System Integration',
                description:
                    'Facilitate the integration of legacy systems with modern applications through AI-enabled connectors.',
                icon: <FaCodeCompare className="w-10 h-10 text-primary" />,
            },
        } as WorkflowCardProps,
    },
    {
        name: 'HR',
        icon: <CurrencyDollarIcon className="w-5 h-5" />,
        disabled: false,
        meta: {
            person: {
                name: 'Liam Kennedy',
                avatar: '/static/avatars/009m.jpg',
                profession: 'HR Manager',
            },
            item1: {
                title: 'AI-Driven Recruitment',
                description:
                    'Automate candidate sourcing and screening with AI to identify the best talent.',
                icon: <FaPeopleGroup className="w-10 h-10 text-primary" />,
            },
            item2: {
                title: 'Employee Onboarding',
                description:
                    'Use AI workflows to streamline the onboarding process and personalize the experience for new hires.',
                icon: <FaHandshakeSimple className="w-10 h-10 text-primary" />,
            },
            item3: {
                title: 'Performance Management',
                description:
                    'Implement AI tools for monitoring employee performance and providing actionable insights.',
                icon: <FaRegChartBar className="w-10 h-10 text-primary" />,
            },
        } as WorkflowCardProps,
    },
    {
        name: 'Finance',
        icon: <PhoneIcon className="w-5 h-5" />,
        disabled: false,
        meta: {
            person: {
                name: 'Oliver Brown',
                avatar: '/static/avatars/010m.jpg',
                profession: 'Financial Manager',
            },
            item1: {
                title: 'Automated Financial Reporting',
                description:
                    'Generate financial reports and insights using AI without manual data entry.',
                icon: <IoDocument className="w-10 h-10 text-primary" />,
            },
            item2: {
                title: 'Fraud Detection',
                description:
                    'Apply deep learning algorithms to detect and prevent fraudulent activities in real-time.',
                icon: <FaMask className="w-10 h-10 text-primary" />,
            },
            item3: {
                title: 'Cash Flow Forecasting',
                description:
                    'Use predictive analytics to forecast cash flow and make informed financial decisions.',
                icon: <GiReceiveMoney className="w-10 h-10 text-primary" />,
            },
        } as WorkflowCardProps,
    },
    {
        name: 'Support',
        icon: <PhoneIcon className="w-5 h-5" />,
        disabled: false,
        meta: {
            person: {
                name: 'Liam Kennedy',
                avatar: '/static/avatars/011m.jpg',
                profession: 'Support Specialist',
            },
            item1: {
                title: 'Intelligent Customer Service Bots',
                description:
                    'Deploy AI chatbots to provide instant support and resolve common customer queries.',
                icon: <FaRobot className="w-10 h-10 text-primary" />,
            },
            item2: {
                title: 'Ticket Routing and Prioritization',
                description:
                    'Use AI to automatically route support tickets to the appropriate team and prioritize them based on urgency.',
                icon: <FaTicket className="w-10 h-10 text-primary" />,
            },
            item3: {
                title: 'Knowledge Base Automation',
                description:
                    'Create and update knowledge base articles using AI to ensure accurate and up-to-date support information.',
                icon: <FaBook className="w-10 h-10 text-primary" />,
            },
        } as WorkflowCardProps,
    },
    {
        name: 'Product Development',
        icon: <ShoppingBagIcon className="w-5 h-5" />,
        disabled: false,
        meta: {
            person: {
                name: 'Caleb Martin',
                avatar: '/static/avatars/008f.jpg',
                profession: 'Product Manager',
            },
            item1: {
                title: 'User Experience Analysis',
                description:
                    'Leverage AI to analyze user interactions and improve product design and functionality.',
                icon: <FaMagnifyingGlass className="w-10 h-10 text-primary" />,
            },
            item2: {
                title: 'Feature Prioritization',
                description:
                    'Use AI to predict which product features will drive the most value for users.',
                icon: <FaCodeCompare className="w-10 h-10 text-primary" />,
            },
            item3: {
                title: 'Automated Testing',
                description:
                    'Implement AI-driven testing tools to identify bugs and issues before product release.',
                icon: <BiTestTube className="w-10 h-10 text-primary" />,
            },
        } as WorkflowCardProps,
    },
];

export const Workflow: FC<IProps> = () => {
    const [active, setActive] = useState(
        cases.find((each) => each.name === 'Marketing')
    );
    return (
        <div className="md:px-10 py-6 flex flex-col gap-4 items-center h-18 max-w-7xl mx-auto">
            <h1 className="text-black text-3xl font-medium font-mono tracking-wide">
                Build AI Enabled Workflow For Every Use Case
            </h1>
            <div className="bg-gray-100 rounded-xl px-4 py-2 flex flex-wrap flex-1 justify-center gap-2">
                {cases.map((each) => (
                    <button
                        className={`text-sm font-medium flex gap-2 items-center px-3 py-3 rounded-lg transition-all  ${
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
