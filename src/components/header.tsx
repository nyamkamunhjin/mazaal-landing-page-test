import { Bars3Icon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useState } from 'react';

interface IProps {}

/**
 * @author
 * @function @Header
 **/

export const Header: FC<IProps> = () => {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <div className=" tw-px-10 tw-py-6 tw-z-10 tw-flex tw-items-center tw-h-20 tw-bg-white tw-text-black">
                <Link href="/">
                    <Image
                        src="/images/logo.png"
                        width={180}
                        height={30}
                        // fill
                        alt="Mazaal AI Logo"
                    />
                </Link>
                <div className=" tw-hidden md:tw-flex tw-mx-auto tw-gap-4 tw-text-base tw-font-light">
                    <Link href="/pricing">Pricing</Link>
                    <Link href="https://docs.mazaal.ai/">Documentation</Link>
                    <Link href="/blogs">Blog</Link>
                </div>
                <Link
                    className=" tw-hidden md:tw-flex tw-text-center tw-px-4 tw-py-2 tw-bg-primary tw-text-white tw-rounded tw-text-sm"
                    href="https://beta.mazaal.ai/"
                >
                    Get Started
                </Link>
                <button
                    title="Menu opener"
                    className=" tw-ml-auto md:tw-hidden"
                    onClick={() => setOpened((prev) => !prev)}
                >
                    <Bars3Icon className=" tw-w-6 tw-h-6 tw-fill-black tw-text-black" />
                </button>
            </div>
            <div
                className={` md:tw-hidden tw-absolute tw-top-20 tw-shadow-lg tw-bg-white tw-w-full tw-p-4 tw-flex tw-flex-col tw-items-center tw-mx-auto tw-gap-4 tw-text-base tw-font-light tw-transition-all tw-duration-300 tw-text-black ${
                    opened ? 'tw-translate-y-0' : '-tw-translate-y-[300px]'
                }`}
            >
                <Link href="/pricing">Pricing</Link>
                <Link href="https://docs.mazaal.ai/">Documentation</Link>
                <Link href="/blogs">Blog</Link>
                <Link
                    className=" tw-w-full tw-px-4 tw-py-2 tw-bg-primary tw-text-center tw-text-white tw-rounded tw-text-sm"
                    href="https://beta.mazaal.ai/"
                >
                    Get Started
                </Link>
            </div>
        </>
    );
};
