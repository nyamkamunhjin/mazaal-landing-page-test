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
        <div className="m-10 py-10 border-t max-w-screen-lg mx-auto w-full flex flex-col-reverse md:flex-row gap-4">
            <div className="flex flex-col gap-8">
                <Image
                    src="/images/logo.png"
                    width={160}
                    height={50}
                    // fill
                    alt="Mazaal AI Logo"
                />
                <div className="flex gap-6 items-center">
                    <Link href="#">
                        <FaLinkedin className="fill-black w-6 h-6" />
                    </Link>
                    <Link href="#">
                        <FaTwitter className="fill-black w-6 h-6" />
                    </Link>
                    <Link href="#">
                        <FaFacebook className="fill-black w-6 h-6" />
                    </Link>
                </div>
                <p className="text-sm text-gray-500">
                    Copyright ©{new Date().getFullYear()}. Mazaal Ai Inc.
                </p>
            </div>
            <div className="md:ml-auto flex flex-col md:flex-row items-start md:items-center gap-10">
                <div className="flex flex-col gap-6 text-black items-start">
                    <span className="font-semibold">PLATFORM</span>
                    <Link className="text-gray-900" href="/pricing">
                        Pricing
                    </Link>
                    <Link className="text-gray-900" href="/documentation">
                        Documentation
                    </Link>
                </div>
                <div className="flex flex-col gap-6 text-black items-start">
                    <span className="font-semibold">RESOURCES</span>
                    <Link className="text-gray-400" href="#">
                        Resource Center
                    </Link>
                    <Link className="text-gray-900" href="/blog">
                        Blog
                    </Link>
                </div>
                <div className="flex flex-col gap-6 text-black items-start">
                    <span className="font-semibold">COMPANY</span>
                    <Link className="text-gray-400" href="/about-us">
                        About Us
                    </Link>
                    <Link className="text-gray-400" href="/career">
                        Career
                    </Link>
                </div>
            </div>
        </div>
    );
};
