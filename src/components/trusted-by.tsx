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

export const TrustedBy: FC<IProps> = () => {
    return (
        <div className=" tw-px-10 tw-py-6 tw-flex tw-flex-col tw-gap-6 tw-items-center tw-h-18 tw-max-w-7xl tw-mx-auto">
            <h1 className=" tw-text-black tw-text-lg tw-font-bold tw-max-w-lg tw-text-center">
                Trusted by
            </h1>
            <div className=" tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-place-content-center tw-gap-12">
                {items.map((each) => (
                    <Image
                        key={each.image}
                        className=" tw-object-contain tw-m-auto"
                        width={160}
                        height={160}
                        src={each.image}
                        alt="logo"
                    />
                ))}
            </div>
        </div>
    );
};
