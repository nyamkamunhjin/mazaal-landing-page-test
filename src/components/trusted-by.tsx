/* eslint-disable @next/next/no-img-element */
import { Bars3Icon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React, { FC } from 'react';

interface IProps {}

const items = [
    {
        image: '/images/trusted-by/feynma.avif',
    },
    {
        image: '/images/trusted-by/nvidia.avif',
    },
    {
        image: '/images/trusted-by/catalysr.avif',
    },
];

export const TrustedBy: FC<IProps> = (props) => {
    return (
        <div className="px-10 py-6 flex flex-col gap-6 items-center h-18 max-w-7xl mx-auto">
            <h6 className="text-black text-lg font-bold max-w-lg text-center">
                Trusted by
            </h6>
            <div className="grid grid-cols-1 md:grid-cols-3 place-content-center gap-4">
                {items.map((each) => (
                    <div
                        className={`flex flex-col rounded-lg`}
                        key={each.image}
                    >
                        <img
                            className="h-32 object-contain"
                            src={each.image}
                            alt="logo"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
