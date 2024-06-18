/* eslint-disable @next/next/no-img-element */
import { PlayIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';

interface IProps {}

/**
 * @author
 * @function @Header
 **/

const videoLink =
    'https://www.loom.com/share/659fc31e5ebf4ed8bc6bbfc7669eb7e3?sid=3e8cea2a-89f8-4d44-a0af-e1025e2413cc';

// guide on scroll animation https://www.freecodecamp.org/news/create-scroll-animations-with-framer-motion-and-react/
export const Hero: FC<IProps> = (props) => {
    const [showVideo, setShowVideo] = useState(false);
    const { scrollYProgress } = useScroll();

    const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
    const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <div className="px-4 py-6 flex flex-col gap-10 max-w-5xl items-center h-18 mx-auto">
            <div className="flex flex-col gap-10 max-w-3xl">
                <h1 className="text-5xl font-bold text-black text-center font-mono ">
                    AI workflow for Everyday Efficiency
                </h1>
                <p className="text-gray-400 text-center text-lg">
                    Empower your daily tasks with intuitive AI — customize,
                    train, and automate effortlessly, no coding required.
                </p>
            </div>
            <div className="flex gap-4 items-center">
                <Link
                    className="px-4 py-2 bg-primary rounded text-sm"
                    href="https://beta.mazaal.ai/"
                >
                    Get Started
                </Link>
                <button className="text-gray-400">Book a Demo</button>
            </div>
            {!showVideo ? (
                <motion.div
                    className={`relative w-full md:h-[350px] rounded-xl overflow-hidden ${
                        !showVideo ? 'block' : 'hidden'
                    }`}
                >
                    <div className="w-full h-full bg-gradient-to-b from-transparent to-white absolute" />
                    <Image
                        width={992}
                        height={350}
                        src="/images/hero.avif"
                        alt="Mazaal Demo Video"
                    />
                    <button
                        className="bg-black rounded-full p-4 text-sm flex items-center gap-2 backdrop-filter backdrop-blur-md bg-opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap font-semibold hover:scale-110 transition-all"
                        onClick={() => setShowVideo(true)}
                    >
                        <PlayIcon className="w-4 h-4" /> Watch Mazaal AI Demo
                    </button>
                </motion.div>
            ) : (
                <div
                    className={`${showVideo ? 'block' : 'hidden'}`}
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
