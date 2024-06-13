/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Bars3Icon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React, { FC } from 'react';

interface IProps {}

export const CallToAction: FC<IProps> = (props) => {
    return (
        <div className="relative bg-gradient-to-bl from-primary/80 to-primary flex flex-col gap-6 p-4 items-center justify-center rounded-lg w-full">
            <img
                className="absolute opacity-10 w-[250px] -left-10"
                src="/images/mazaal-logo-white.svg"
            />
            <img
                className="absolute opacity-10 w-[250px] -right-10 rotate-180"
                src="/images/mazaal-logo-white.svg"
            />
            <div className="max-w-xl flex flex-col items-center justify-center gap-6 my-28">
                <h1 className="text-2xl md:text-4xl font-bold max-w-lg text-center">
                    Begin Your AI Journey Today
                </h1>
                <p className="text-base md:text-lg font-light text-center">
                    Start unlocking insights from your data today. Join the
                    community of businesses using Mazaal.ai. No prior coding
                    experience required!
                </p>
                <div className="flex gap-4 items-center">
                    <button className="px-4 py-2 font-medium text-primary bg-white rounded text-sm">
                        Try For Free
                    </button>
                    <button className="text-sm font-light">Book a Demo</button>
                </div>
            </div>
        </div>
    );
};
