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
            <div className="px-10 py-6 z-10 flex items-center h-20 bg-white text-black">
                <Link href="/">
                    <Image
                        src="/images/logo.png"
                        width={180}
                        height={30}
                        // fill
                        alt="Mazaal AI Logo"
                    />
                </Link>
                <div className="hidden md:flex mx-auto gap-4 text-base font-light">
                    <Link href="/pricing">Pricing</Link>
                    <Link href="https://docs.mazaal.ai/">Documentation</Link>
                    <Link href="#">Blog</Link>
                </div>
                <Link
                    className="hidden md:flex text-center px-4 py-2 bg-primary text-white rounded text-sm"
                    href="https://beta.mazaal.ai/"
                >
                    Get Started
                </Link>
                <button
                    title="Menu opener"
                    className="ml-auto md:hidden"
                    onClick={() => setOpened((prev) => !prev)}
                >
                    <Bars3Icon className="w-6 h-6 fill-black text-black" />
                </button>
            </div>
            <div
                className={`md:hidden absolute top-20 shadow-lg bg-white w-full p-4 flex flex-col items-center mx-auto gap-4 text-base font-light transition-all duration-300 text-black ${
                    opened ? 'translate-y-0' : '-translate-y-[300px]'
                }`}
            >
                <Link href="/pricing">Pricing</Link>
                <Link href="https://docs.mazaal.ai/">Documentation</Link>
                <Link href="#">Blog</Link>
                <Link
                    className="w-full px-4 py-2 bg-primary text-center text-white rounded text-sm"
                    href="https://beta.mazaal.ai/"
                >
                    Get Started
                </Link>
            </div>
            /{' '}
        </>
    );
};
