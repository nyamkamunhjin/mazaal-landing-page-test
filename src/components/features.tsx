import Image from 'next/image';
import React, { FC } from 'react';

interface IProps {}

const items = [
    {
        className: 'tw-col-span-3',
        title: 'Truly No-Code',
        description:
            'Combine different models for enhanced capabilities and superior results.',
        image: '/images/features/truly-no-code.avif',
    },
    {
        className: 'tw-col-span-3',
        title: 'Drag and Drop',
        description:
            'Drag this drag that and connect them with LLM. Endless possibilites',
        image: '/images/features/drag-n-drop.avif',
    },
    {
        className: 'tw-col-span-2',
        title: '100s of ready to use models',
        description: 'Start with pre-built workflows. or build your own',
        image: '/images/features/ready-to-use-models.avif',
    },
    {
        className: 'tw-col-span-2',
        title: 'Integrate with the tools you use',
        description: 'Over 200 apps ready to be integrated',
        image: '/images/features/integration-tools.avif',
    },
    {
        className: 'tw-col-span-2',
        title: 'Share the workflow in single click',
        description:
            'Automated your boring task? Share it with your colleague, friend or boss in a single click',
        image: '/images/features/share-flow.avif',
    },
];

export const Features: FC<IProps> = () => {
    return (
        <div className="md:tw-px-10 tw-py-6 tw-flex tw-flex-col tw-gap-6 tw-items-center tw-h-18 tw-max-w-7xl tw-mx-auto">
            <span className=" tw-text-primary tw-text-sm tw-font-semibold">
                FEATURES
            </span>
            <h1 className=" tw-text-black tw-text-3xl tw-font-medium tw-max-w-lg tw-text-center tw-font-mono tw-tracking-wide">
                Automate Your Business Process by Dragging This and That
            </h1>
            <div className=" tw-grid tw-grid-cols-1 md:tw-grid-cols-6 tw-gap-4">
                {items.map((each) => (
                    <div
                        className={` tw-flex tw-flex-col tw-rounded-lg tw-bg-white ${each.className}`}
                        key={each.title}
                    >
                        <Image
                            src={each.image}
                            alt={each.title}
                            width={592}
                            height={264}
                        />
                        <div className=" tw-flex tw-flex-col tw-gap-2 tw-p-4">
                            <h1 className=" tw-text-text-primary tw-font-semibold">
                                {each.title}
                            </h1>
                            <p className="tw-text-text-tertiary">
                                {each.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
