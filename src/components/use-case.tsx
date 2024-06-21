import Image from 'next/image';
import React, { FC } from 'react';

interface IProps {}

const items = [
    {
        title: 'Healthcare',
        description:
            'Enhance diagnostics with predictive aid and seamless data management.',
        image: '/images/use-cases/healthcare.avif',
    },
    {
        title: 'Security & Surveillance',
        description:
            'Augment security with automated threat detection and real-time monitoring.',
        image: '/images/use-cases/security.avif',
    },
    {
        title: 'Retail',
        description:
            'Revolutionise retail with automated inventory tracking and demand forecasting.',
        image: '/images/use-cases/retail.avif',
    },
    {
        title: 'Manufacturing',
        description:
            'Boost efficiency with predictive maintenance and optimized supply chains.',
        image: '/images/use-cases/manufacturing.avif',
    },
];

export const UseCase: FC<IProps> = () => {
    return (
        <div className=" tw-px-10 tw-py-6 tw-flex tw-flex-col tw-gap-6 tw-items-center tw-h-18 tw-border-b tw-border-gray-100">
            <span className=" tw-text-primary tw-text-sm tw-font-semibold">
                DISCOVER ENDLESS USE CASES
            </span>
            <h1 className=" tw-text-black tw-text-3xl tw-font-medium tw-max-w-lg tw-text-center tw-font-mono tw-tracking-wide">
                Empowering Industries Worldwide
            </h1>
            <div className=" tw-flex tw-flex-wrap tw-gap-6">
                {items.map((each) => (
                    <div
                        className={` tw-flex tw-flex-col tw-gap-3 tw-w-full md:tw-w-52 tw-rounded-lg`}
                        key={each.title}
                    >
                        <Image
                            className=" tw-w-full md:tw-w-52 md:tw-h-52 tw-rounded-lg tw-object-cover"
                            width={208}
                            height={208}
                            src={each.image}
                            alt={each.title}
                        />
                        <div className=" tw-flex tw-flex-col tw-gap-2">
                            <h1 className=" tw-text-black tw-font-semibold tw-text-xl lg:tw-text-lg">
                                {each.title}
                            </h1>
                            <p className=" tw-text-gray-600 tw-text-xl lg:tw-text-base">
                                {each.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
