/* eslint-disable @next/next/no-img-element */
import { Bars3Icon, PlayIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React, { FC } from 'react';

interface IProps {}

/**
 * @author
 * @function @Header
 **/

export const Hero: FC<IProps> = (props) => {
    return (
        <div className="px-4 py-6 flex flex-col gap-10 max-w-5xl items-center h-18 mx-auto">
            <div className="flex flex-col gap-10 max-w-3xl">
                <h1 className="text-6xl font-bold text-black text-center">
                    AI workflow for Everyday Efficiency
                </h1>
                <p className="text-gray-400 text-center text-lg">
                    Empower your daily tasks with intuitive AI — customize,
                    train, and automate effortlessly, no coding required.
                </p>
            </div>

            <div className="flex gap-4 items-center">
                <button className="px-4 py-2 bg-primary rounded text-sm">
                    Get Started
                </button>
                <button className="text-gray-400">Book a Demo</button>
            </div>
            <div className="relative w-full h-[350px] rounded-xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-transparent to-white absolute" />
                <img
                    className="w-full"
                    src="/images/hero.avif"
                    alt="Mazaal Demo Video"
                />
                <button className="bg-black rounded-full p-4 text-sm flex items-center gap-2 backdrop-filter backdrop-blur-md bg-opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap font-semibold hover:scale-115 transition-all">
                    <PlayIcon className="w-4 h-4" /> Watch Mazaal AI Demo
                </button>
            </div>
        </div>
    );
};