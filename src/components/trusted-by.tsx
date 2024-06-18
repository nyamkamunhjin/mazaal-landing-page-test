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
        <div className="px-10 py-6 flex flex-col gap-6 items-center h-18 max-w-7xl mx-auto">
            <h1 className="text-black text-lg font-bold max-w-lg text-center">
                Trusted by
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 place-content-center gap-12">
                {items.map((each) => (
                    <Image
                        key={each.image}
                        className="object-contain m-auto"
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
