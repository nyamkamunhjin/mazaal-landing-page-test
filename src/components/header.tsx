import { Bars3Icon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface IProps {}

/**
 * @author
 * @function @Header
 **/

export const Header: FC<IProps> = (props) => {
    return (
        <div className="px-10 py-6 flex items-center h-18 text-black">
            <div className="">
                <Image
                    src="/images/logo.png"
                    width={180}
                    height={30}
                    // fill
                    alt="Mazaal AI Logo"
                />
            </div>
            <div className="flex mx-auto gap-4 text-base font-light">
                <Link href="/pricing">Pricing</Link>
                <Link href="#">Documenation</Link>
                <Link href="#">Blog</Link>
            </div>
            <button className="hidden md:flex px-4 py-2 bg-primary text-white rounded text-sm">
                Get Started
            </button>
            <button className="ml-auto md:hidden">
                <Bars3Icon className="w-6 h-6 fill-black text-black" />
            </button>
        </div>
    );
};
