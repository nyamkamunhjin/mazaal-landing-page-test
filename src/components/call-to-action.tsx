import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface IProps {}

export const CallToAction: FC<IProps> = () => {
    return (
        <div className="relative bg-gradient-to-bl from-primary/80 to-primary flex flex-col gap-6 p-4 items-center justify-center rounded-lg w-full">
            <Image
                className="absolute opacity-10 -left-10"
                width={250}
                height={250}
                alt="Mazaal logo"
                src="/images/mazaal-logo-white.svg"
            />
            <Image
                className="absolute opacity-10 -right-10 rotate-180"
                width={250}
                height={250}
                alt="Mazaal logo"
                src="/images/mazaal-logo-white.svg"
            />
            <div className="max-w-xl flex flex-col items-center justify-center gap-6 my-28">
                <h1 className="text-2xl md:text-4xl font-medium max-w-lg text-center font-mono">
                    Begin Your AI Journey Today
                </h1>
                <p className="text-base font-light text-center">
                    Start unlocking insights from your data today. Join the
                    community of businesses using Mazaal.ai. No prior coding
                    experience required!
                </p>
                <div className="flex gap-4 items-center">
                    <Link
                        className="px-4 py-2 font-medium text-primary bg-white rounded text-sm"
                        href="https://beta.mazaal.ai/"
                    >
                        Try For Free
                    </Link>
                    <button className="text-sm font-light">Book a Demo</button>
                </div>
            </div>
        </div>
    );
};
