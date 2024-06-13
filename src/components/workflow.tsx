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
    },
    {
        name: 'Sales',
        icon: <PresentationChartBarIcon className="w-5 h-5" />,
        disabled: false,
        image: '/images/workflow/sales.avif',
    },
    {
        name: 'Operations',
        icon: <CogIcon className="w-5 h-5" />,
        disabled: false,
        image: '/images/workflow/operations.avif',
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
    const [active, setActive] = useState('Marketing');
    return (
        <div className="md:px-10 py-6 flex flex-col gap-4 items-center h-18 max-w-7xl mx-auto">
            <h1 className="text-black text-3xl font-bold">
                Build AI Enabled Workflow For Every Use Case
            </h1>
            <div className="bg-gray-100 rounded-xl px-4 py-2 flex flex-wrap flex-1 justify-center gap-2">
                {cases.map((each) => (
                    <button
                        className={`text-base font-medium flex gap-2 items-center px-3 py-3 rounded-lg transition-all  ${
                            active === each.name
                                ? 'text-primary bg-white'
                                : 'text-text-secondary'
                        }`}
                        key={each.name}
                        onClick={() => setActive(each.name)}
                        disabled={each.disabled}
                    >
                        {each.icon} {each.name}
                    </button>
                ))}
            </div>
            {cases.find((each) => each.name === active)?.image ? (
                <div className="flex">
                    <img
                        className="w-full"
                        src={cases.find((each) => each.name === active)?.image}
                        // fill
                        alt="Mazaal AI Use case images"
                    />
                </div>
            ) : null}
        </div>
    );
};
