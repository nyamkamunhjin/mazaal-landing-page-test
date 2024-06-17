/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
import { BsMegaphoneFill } from 'react-icons/bs';
import { FaFile, FaLightbulb } from 'react-icons/fa';

export interface WorkflowCardProps {
    person: {
        name: string;
        profession: string;
        avatar: string;
    };
    item1: {
        title: string;
        description: string;
        icon: React.ReactNode;
    };
    item2: {
        title: string;
        description: string;
        icon: React.ReactNode;
    };
    item3: {
        title: string;
        description: string;
        icon: React.ReactNode;
    };
}

/**
 * @author
 * @function @WorkflowCard
 **/

export const WorkflowCard: FC<WorkflowCardProps> = ({
    person,
    item1,
    item2,
    item3,
}) => {
    return (
        <div className="relative grid grid-cols-3 place-content-center gap-16 items-center min-w-[1200px] w-full text-black p-4">
            <div className="absolute grid w-full py-16 px-48 h-full">
                <div className="w-full h-full flex">
                    <div className="w-full h-2/3 border-t border-x rounded-tl-xl"></div>
                    <div className="w-full h-2/3 border-t border-r rounded-xl"></div>
                </div>
            </div>

            <div className="col-span-3 flex justify-center w-full">
                <div className="w-72 flex items-center gap-2 border p-4 rounded-xl h-full justify-evenly z-10 bg-white">
                    <img
                        className="w-24 rounded-full"
                        src={person.avatar}
                        alt="avatar"
                    />
                    <div className="flex flex-col justify-center gap-2 items-start h-full">
                        <span className="text-xl font-medium text-text-primary">
                            {person.name}
                        </span>
                        <span className="text-text-secondary text-lg">
                            {person.profession}
                        </span>
                    </div>
                </div>
            </div>

            <div className="mx-auto flex flex-col gap-4 w-60 h-60 bg-white -mt-40 z-10">
                <div className="flex items-center border p-4 rounded-xl mx-auto justify-evenly">
                    {item1.icon}
                </div>
                <div className="flex flex-col justify-center gap-2 items-center mx-auto w-full">
                    <span className="text-center text-xl font-medium text-text-primary">
                        {item1.title}
                    </span>
                    <span className="text-center text-text-secondary text-lg">
                        {item1.description}
                    </span>
                </div>
            </div>

            <div className="mx-auto flex flex-col gap-4 w-60 h-60 bg-white z-10">
                <div className="flex items-center border p-4 rounded-xl mx-auto justify-evenly">
                    {item2.icon}
                </div>
                <div className="flex flex-col justify-center gap-2 items-center mx-auto w-full">
                    <span className="text-center text-xl font-medium text-text-primary">
                        {item2.title}
                    </span>
                    <span className="text-center text-text-secondary text-lg">
                        {item2.description}
                    </span>
                </div>
            </div>

            <div className="mx-auto flex flex-col gap-4 w-60 h-60 bg-white -mt-40 z-10">
                <div className="flex items-center border p-4 rounded-xl mx-auto justify-evenly">
                    {item3.icon}
                </div>
                <div className="flex flex-col justify-center gap-2 items-center mx-auto w-full">
                    <span className="text-center text-xl font-medium text-text-primary">
                        {item3.title}
                    </span>
                    <span className="text-center text-text-secondary text-lg">
                        {item3.description}
                    </span>
                </div>
            </div>
        </div>
    );
};
