import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface IProps {}

export const CallToAction: FC<IProps> = () => {
    return (
        <div className="tw-relative tw-bg-gradient-to-bl tw-from-primary/80 tw-to-primary tw-flex tw-flex-col tw-gap-6 tw-p-4 tw-items-center tw-justify-center tw-rounded-lg tw-w-full">
            <Image
                className="tw-absolute tw-opacity-10 -tw-left-10"
                width={250}
                height={250}
                alt="Mazaal logo"
                src="/images/mazaal-logo-white.svg"
            />
            <Image
                className="tw-absolute tw-opacity-10 -tw-right-10 tw-rotate-180"
                width={250}
                height={250}
                alt="Mazaal logo"
                src="/images/mazaal-logo-white.svg"
            />
            <div className=" tw-max-w-xl tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-6 tw-my-28">
                <h1 className=" tw-text-2xl md:tw-text-4xl tw-font-medium tw-max-w-lg tw-text-center tw-font-mono">
                    Begin Your AI Journey Today
                </h1>
                <p className=" tw-text-base tw-font-light tw-text-center">
                    Start unlocking insights from your data today. Join the
                    community of businesses using Mazaal.ai. No prior coding
                    experience required!
                </p>
                <div className=" tw-flex tw-gap-4 tw-items-center">
                    <Link
                        className=" tw-px-4 tw-py-2 tw-font-medium tw-text-primary tw-bg-white tw-rounded tw-text-sm"
                        href="https://beta.mazaal.ai/"
                    >
                        Try For Free
                    </Link>
                    <button className=" tw-text-sm tw-font-light">
                        Book a Demo
                    </button>
                </div>
            </div>
        </div>
    );
};
