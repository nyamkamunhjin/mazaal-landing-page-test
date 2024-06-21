import Image from 'next/image';
import React, { FC } from 'react';

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
        <div className=" tw-relative tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-place-content-center tw-gap-16 tw-items-center lg:tw-min-w-[1200px] tw-w-full tw-text-black tw-p-4">
            <div className=" tw-absolute lg:tw-grid tw-w-full tw-py-16 tw-px-48 tw-h-full">
                <div className=" tw-w-full tw-h-full tw-flex">
                    <div className=" tw-w-full lg:tw-h-2/3 tw-border-r lg:tw-border-t lg:tw-border-x tw-rounded-tl-xl"></div>
                    <div className=" tw-w-full lg:tw-h-2/3 lg:tw-border-t lg:tw-border-r tw-rounded-xl"></div>
                </div>
            </div>

            <div className=" tw-col-span-1 lg:tw-col-span-3 tw-flex tw-justify-center tw-w-full">
                <div className=" tw-w-72 tw-flex tw-items-center tw-gap-2 tw-border tw-p-4 tw-rounded-xl tw-h-full tw-justify-evenly tw-z-10 tw-bg-white">
                    <Image
                        className=" tw-w-24 tw-rounded-full"
                        width={96}
                        height={96}
                        src={person.avatar}
                        alt="avatar"
                    />
                    <div className=" tw-flex tw-flex-col tw-justify-center tw-gap-2 tw-items-start tw-h-full">
                        <span className=" tw-text-xl tw-font-medium tw-text-text-primary">
                            {person.name}
                        </span>
                        <span className=" tw-text-text-secondary tw-text-lg">
                            {person.profession}
                        </span>
                    </div>
                </div>
            </div>

            <div className=" tw-mx-auto tw-flex tw-flex-col tw-gap-4 tw-w-60 lg:tw-h-60 tw-bg-white lg:-tw-mt-40 tw-z-10">
                <div className=" tw-flex tw-items-center tw-border tw-p-4 tw-rounded-xl tw-mx-auto tw-justify-evenly">
                    {item1.icon}
                </div>
                <div className=" tw-flex tw-flex-col tw-justify-center tw-gap-2 tw-items-center tw-mx-auto tw-w-full">
                    <span className=" tw-text-center tw-text-xl tw-font-medium tw-text-text-primary">
                        {item1.title}
                    </span>
                    <span className=" tw-text-center tw-text-text-secondary tw-text-lg">
                        {item1.description}
                    </span>
                </div>
            </div>

            <div className=" tw-mx-auto tw-flex tw-flex-col tw-gap-4 tw-w-60 lg:tw-h-60 tw-bg-white tw-z-10">
                <div className=" tw-flex tw-items-center tw-border tw-p-4 tw-rounded-xl tw-mx-auto tw-justify-evenly">
                    {item2.icon}
                </div>
                <div className=" tw-flex tw-flex-col tw-justify-center tw-gap-2 tw-items-center tw-mx-auto tw-w-full">
                    <span className=" tw-text-center tw-text-xl tw-font-medium tw-text-text-primary">
                        {item2.title}
                    </span>
                    <span className=" tw-text-center tw-text-text-secondary tw-text-lg">
                        {item2.description}
                    </span>
                </div>
            </div>

            <div className=" tw-mx-auto tw-flex tw-flex-col tw-gap-4 tw-w-60 lg:tw-h-60 tw-bg-white lg:-tw-mt-40 tw-z-10">
                <div className=" tw-flex tw-items-center tw-border tw-p-4 tw-rounded-xl tw-mx-auto tw-justify-evenly">
                    {item3.icon}
                </div>
                <div className=" tw-flex tw-flex-col tw-justify-center tw-gap-2 tw-items-center tw-mx-auto tw-w-full">
                    <span className=" tw-text-center tw-text-xl tw-font-medium tw-text-text-primary">
                        {item3.title}
                    </span>
                    <span className=" tw-text-center tw-text-text-secondary tw-text-lg">
                        {item3.description}
                    </span>
                </div>
            </div>
        </div>
    );
};
