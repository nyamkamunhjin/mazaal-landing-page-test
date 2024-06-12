import { Bars3Icon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface IProps {}

/**
 * @author
 * @function @Footer
 **/

export const Footer: FC<IProps> = (props) => {
    return (
        <div className="m-10 py-10 border-t max-w-screen-lg mx-auto w-full flex gap-4">
            <div className="flex flex-col gap-4">
                <Image
                    src="/images/logo.png"
                    width={140}
                    height={30}
                    // fill
                    alt="Mazaal AI Logo"
                />
                <div className="flex gap-4 items-center">
                    <Link href="#">
                        <FaLinkedin className="fill-black w-5 h-5" />
                    </Link>
                    <Link href="#">
                        <FaTwitter className="fill-black w-5 h-5" />
                    </Link>
                    <Link href="#">
                        <FaFacebook className="fill-black w-5 h-5" />
                    </Link>
                </div>
                <p className="text-sm text-gray-500">
                    Copyright ©{new Date().getFullYear()}. Mazaal Ai Inc.
                </p>
            </div>
            <div className="ml-auto flex items-center gap-10">
                <div className="flex flex-col gap-4 text-black text-sm items-center">
                    <span>PLATFORM</span>
                    <Link className="text-gray-900 text-sm" href="/pricing">
                        Pricing
                    </Link>
                    <Link
                        className="text-gray-900 text-sm"
                        href="/documentation"
                    >
                        Documentation
                    </Link>
                </div>
                <div className="flex flex-col gap-4 text-black text-sm items-center">
                    <span>RESOURCES</span>
                    <Link className="text-gray-400 text-sm" href="#">
                        Resource Center
                    </Link>
                    <Link className="text-gray-900 text-sm" href="/blog">
                        Blog
                    </Link>
                </div>
                <div className="flex flex-col gap-4 text-black text-sm items-center">
                    <span>COMPANY</span>
                    <Link className="text-gray-400 text-sm" href="/about-us">
                        About Us
                    </Link>
                    <Link className="text-gray-400 text-sm" href="/career">
                        Career
                    </Link>
                </div>
            </div>
        </div>
    );
};
