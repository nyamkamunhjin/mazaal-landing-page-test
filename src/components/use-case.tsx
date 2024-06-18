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
        <div className="px-10 py-6 flex flex-col gap-6 items-center h-18 border-b border-gray-100">
            <span className="text-primary text-sm font-semibold">
                DISCOVER ENDLESS USE CASES
            </span>
            <h1 className="text-black text-3xl font-bold max-w-lg text-center font-mono">
                Empowering Industries Worldwide
            </h1>
            <div className="flex flex-wrap gap-6">
                {items.map((each) => (
                    <div
                        className={`flex flex-col gap-3 w-full md:w-52 rounded-lg`}
                        key={each.title}
                    >
                        <Image
                            className="w-full md:w-52 md:h-52 rounded-lg object-cover"
                            width={208}
                            height={208}
                            src={each.image}
                            alt={each.title}
                        />
                        <div className="flex flex-col gap-2">
                            <h1 className="text-black font-semibold text-xl lg:text-lg">
                                {each.title}
                            </h1>
                            <p className="text-gray-600 text-xl lg:text-base">
                                {each.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
