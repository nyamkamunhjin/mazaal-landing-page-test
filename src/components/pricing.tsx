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
        icon: <FlagIcon className="tw-w-10 tw-h-10 tw-text-primary" />,
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
        icon: <BoltIcon className="tw-w-10 tw-h-10 tw-text-primary" />,
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
        icon: (
            <BuildingOfficeIcon className="tw-w-10 tw-h-10 tw-text-primary" />
        ),
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

export const Pricing: FC<IProps> = () => {
    return (
        <div className="md:tw-px-10 tw-py-6 tw-flex tw-flex-col tw-gap-6 tw-items-center tw-h-18 tw-w-full tw-max-w-screen-lg tw-mx-auto tw-p-4">
            <div className=" tw-flex tw-flex-col tw-gap-4 tw-items-start tw-max-w-xl tw-mr-auto tw-mb-6">
                <span className=" tw-text-primary tw-text-start tw-text-sm tw-font-semibold">
                    CHOOSE YOUR PATH TO AI SUCCESS
                </span>
                <h1 className=" tw-text-black tw-text-3xl tw-font-medium tw-max-w-lg tw-text-start tw-font-mono">
                    Flexible Plans for Every Business Need
                </h1>
                <p className="tw-text-gray-500">
                    Discover our range of affordable, scalable pricing plans
                    designed to fit businesses of all sizes and stages. Start
                    your AI journey with Mazaal AI today
                </p>
            </div>

            <div className=" tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-w-full tw-gap-4">
                {items.map((each) => (
                    <div
                        className={` tw-flex tw-flex-col tw-relative tw-rounded-lg tw-p-5 ${
                            each.selected
                                ? ' tw-bg-white tw-border tw-border-primary'
                                : ' tw-bg-gray-50'
                        }`}
                        key={each.title}
                    >
                        {each.selected ? (
                            <span className=" tw-absolute tw-top-0 -tw-translate-y-1/2 tw-left-1/2 -tw-translate-x-1/2 tw-rounded-full tw-px-4 tw-py-1 tw-text-[11px] tw-font-medium tw-bg-primary">
                                Most Popular
                            </span>
                        ) : null}
                        <div className=" tw-flex tw-flex-col tw-gap-4 tw-border-b">
                            {each.icon}
                            <h1 className=" tw-text-black tw-text-lg tw-font-semibold">
                                {each.title}
                            </h1>
                            <p className=" tw-text-black tw-text-3xl tw-font-medium">
                                {each.price}
                            </p>
                            <Link
                                href="https://beta.mazaal.ai"
                                className=" tw-px-4 tw-py-2 tw-bg-primary tw-text-white tw-rounded tw-text-sm tw-w-full"
                            >
                                Get started
                            </Link>
                        </div>
                        <div className=" tw-flex tw-flex-col tw-gap-3 tw-border-t tw-mt-5 tw-py-5">
                            <span className=" tw-text-black tw-text-xs tw-font-medium">
                                WHAT'S INCLUDED...
                            </span>
                            {each.included.map((item) => (
                                <div
                                    className=" tw-flex tw-gap-2 tw-items-center tw-text-xs"
                                    key={item}
                                >
                                    <ArrowRightCircleIcon className=" tw-w-4 tw-h-4 tw-text-primary" />{' '}
                                    <span className="tw-text-black">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
