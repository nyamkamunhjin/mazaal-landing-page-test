import { PlayIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface IProps {}

/**
 * @author
 * @function @Header
 **/

// guide on scroll animation https://www.freecodecamp.org/news/create-scroll-animations-with-framer-motion-and-react/
export const Hero: FC<IProps> = () => {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <div className=" tw-px-4 tw-py-6 tw-flex tw-flex-col tw-gap-10 tw-max-w-5xl tw-items-center tw-h-18 tw-mx-auto">
            <div className=" tw-flex tw-flex-col tw-gap-10 tw-max-w-3xl">
                <h1 className=" tw-text-5xl tw-font-medium tw-text-black tw-text-center tw-font-mono">
                    AI workflow for Everyday Efficiency
                </h1>
                <p className=" tw-text-gray-400 tw-text-center tw-text-base">
                    Empower your daily tasks with intuitive AI — customize,
                    train, and automate effortlessly, no coding required.
                </p>
            </div>
            <div className=" tw-flex tw-gap-4 tw-items-center">
                <Link
                    className=" tw-px-4 tw-py-2 tw-bg-primary tw-rounded tw-text-sm"
                    href="https://beta.mazaal.ai/"
                >
                    Get Started
                </Link>
                <button className="tw-text-gray-400">Book a Demo</button>
            </div>
            {!showVideo ? (
                <motion.div
                    className={` tw-relative tw-w-full md:tw-h-[350px] tw-rounded-xl tw-overflow-hidden tw-${
                        !showVideo ? 'tw-block' : 'tw-hidden'
                    }`}
                >
                    <div className=" tw-w-full tw-h-full tw-bg-gradient-to-b tw-from-transparent tw-to-white tw-absolute" />
                    <Image
                        width={992}
                        height={350}
                        priority
                        src="/images/hero.avif"
                        alt="Mazaal Demo Video"
                    />
                    <button
                        className=" tw-bg-black tw-rounded-full tw-p-4 tw-text-sm tw-flex tw-items-center tw-gap-2 tw-backdrop-filter tw-backdrop-blur-md tw-bg-opacity-20 tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2 tw-text-nowrap tw-font-semibold hover:tw-scale-110 tw-transition-all"
                        onClick={() => setShowVideo(true)}
                    >
                        <PlayIcon className=" tw-w-4 tw-h-4" /> Watch Mazaal AI
                        Demo
                    </button>
                </motion.div>
            ) : (
                <div
                    className={`${showVideo ? 'tw-block' : 'tw-hidden'}`}
                    style={{
                        position: 'relative',
                        paddingBottom: '82.19178082191782%',
                        height: 0,
                        width: '100%',
                    }}
                >
                    <iframe
                        src="https://www.loom.com/embed/659fc31e5ebf4ed8bc6bbfc7669eb7e3?sid=1d1b0612-2e92-4599-a9ae-aafe8f2193e0"
                        allowFullScreen
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </div>
            )}
        </div>
    );
};
