/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import {
    ArrowRightCircleIcon,
    BoltIcon,
    BuildingOfficeIcon,
    FlagIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { FC } from 'react';

interface IProps {}

const items = [
    {
        title: 'Basic',
        price: '$49/mo',
        icon: <FlagIcon className="w-10 h-10 text-primary" />,
        included: [
            '1000 credits',
            '1 project / 1 user',
            '1 GB storage',
            'Limited resource',
            'Email support',
        ],
    },
    {
        title: 'Pro',
        price: '$499/mo',
        icon: <BoltIcon className="w-10 h-10 text-primary" />,
        selected: true,
        included: [
            '5000 credits',
            '5 projects / 5 users',
            '50 GB storage',
            'Extended resources',
            'Complex workflows',
            'Email & Chat support',
        ],
    },
    {
        title: 'Enterprise',
        price: 'Custom',
        icon: <BuildingOfficeIcon className="w-10 h-10 text-primary" />,
        included: [
            'Unlimited credits',
            'Role-Based access',
            'Unlimited storage',
            'Complex workflows',
            'Dedicated engineer',
            'Priority Support',
        ],
    },
];

export const Pricing: FC<IProps> = (props) => {
    return (
        <div className="md:px-10 py-6 flex flex-col gap-6 items-center h-18 w-full max-w-screen-lg mx-auto p-4">
            <div className="flex flex-col gap-4 items-start max-w-xl mr-auto mb-6">
                <span className="text-primary text-start text-sm font-semibold">
                    CHOOSE YOUR PATH TO AI SUCCESS
                </span>
                <h1 className="text-black text-3xl font-bold max-w-lg text-start font-mono">
                    Flexible Plans for Every Business Need
                </h1>
                <p className="text-gray-500">
                    Discover our range of affordable, scalable pricing plans
                    designed to fit businesses of all sizes and stages. Start
                    your AI journey with Mazaal AI today
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
                {items.map((each) => (
                    <div
                        className={`flex flex-col relative rounded-lg p-5 ${
                            each.selected
                                ? 'bg-white border border-primary'
                                : 'bg-gray-50'
                        }`}
                        key={each.title}
                    >
                        {each.selected ? (
                            <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[11px] font-medium bg-primary">
                                Most Popular
                            </span>
                        ) : null}
                        <div className="flex flex-col gap-4 border-b">
                            {each.icon}
                            <h3 className="text-black text-lg font-semibold">
                                {each.title}
                            </h3>
                            <p className="text-black text-3xl font-medium">
                                {each.price}
                            </p>
                            <Link
                                href="https://beta.mazaal.ai"
                                className="px-4 py-2 bg-primary text-white rounded text-sm w-full"
                            >
                                Get started
                            </Link>
                        </div>
                        <div className="flex flex-col gap-3 border-t mt-5 py-5">
                            <span className="text-black text-xs font-medium mb-">
                                WHAT'S INCLUDED...
                            </span>
                            {each.included.map((item) => (
                                <div
                                    className="flex gap-2 items-center text-xs"
                                    key={item}
                                >
                                    <ArrowRightCircleIcon className="w-4 h-4 text-primary" />{' '}
                                    <span className="text-black">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
