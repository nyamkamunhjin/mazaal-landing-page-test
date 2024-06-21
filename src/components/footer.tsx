import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface IProps {}

/**
 * @author
 * @function @Footer
 **/

export const Footer: FC<IProps> = () => {
    return (
        <div className=" tw-m-10 tw-py-10 tw-border-t tw-max-w-screen-lg tw-mx-auto tw-w-full tw-flex tw-flex-col-reverse md:tw-flex-row tw-gap-4">
            <div className=" tw-flex tw-flex-col tw-gap-8">
                <Link href="https://beta.mazaal.ai/">
                    <Image
                        src="/images/logo.png"
                        width={160}
                        height={50}
                        // fill
                        alt="Mazaal AI Logo"
                    />
                </Link>
                <div className=" tw-flex tw-gap-6 tw-items-center">
                    <Link
                        id="linkedin"
                        href="https://www.linkedin.com/company/mazaal-ai/"
                        aria-label="Explore more on linkedin"
                    >
                        <FaLinkedin className=" tw-fill-black tw-w-6 tw-h-6" />
                    </Link>

                    <Link
                        id="twitter"
                        href="https://x.com/Mazaal_AI"
                        aria-label="Explore more on twitter"
                    >
                        <FaTwitter className=" tw-fill-black tw-w-6 tw-h-6" />
                    </Link>
                    <Link
                        id="facebook"
                        href="https://www.facebook.com/profile.php?id=100089427944001"
                        aria-label="Explore more on facebook"
                    >
                        <FaFacebook className=" tw-fill-black tw-w-6 tw-h-6" />
                    </Link>
                </div>
                <p className=" tw-text-sm tw-text-gray-500">
                    Copyright ©{new Date().getFullYear()}. Mazaal Ai Inc.
                </p>
            </div>
            <div className="md:tw-ml-auto tw-flex tw-flex-col md:tw-flex-row tw-items-start md:tw-items-center tw-gap-10">
                tw-{' '}
                <div className=" tw-flex tw-flex-col tw-gap-6 tw-text-black tw-items-start">
                    <span className=" tw-font-semibold">PLATFORM</span>
                    <Link className=" tw-text-gray-900" href="/pricing">
                        Pricing
                    </Link>
                    <Link
                        className=" tw-text-gray-900"
                        href="https://docs.mazaal.ai"
                    >
                        Documentation
                    </Link>
                </div>
                <div className=" tw-flex tw-flex-col tw-gap-6 tw-text-black tw-items-start">
                    <span className="tw-font-semibold">RESOURCES</span>
                    <Link className="tw-text-gray-400" href="#">
                        Resource Center
                    </Link>
                    <Link className="tw-text-gray-900" href="/blogs">
                        Blog
                    </Link>
                </div>
                <div className=" tw-flex tw-flex-col tw-gap-6 tw-text-black tw-items-start">
                    <span className=" tw-font-semibold">COMPANY</span>
                    <Link className=" tw-text-gray-400" href="/about-us">
                        About Us
                    </Link>
                    <Link className=" tw-text-gray-400" href="/career">
                        Career
                    </Link>
                </div>
            </div>
        </div>
    );
};
