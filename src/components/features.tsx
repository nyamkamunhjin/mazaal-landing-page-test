import Image from 'next/image';
import React, { FC } from 'react';

interface IProps {}

const items = [
    {
        className: 'col-span-3',
        title: 'Truly No-Code',
        description:
            'Combine different models for enhanced capabilities and superior results.',
        image: '/images/features/truly-no-code.avif',
    },
    {
        className: 'col-span-3',
        title: 'Drag and Drop',
        description:
            'Drag this drag that and connect them with LLM. Endless possibilites',
        image: '/images/features/drag-n-drop.avif',
    },
    {
        className: 'col-span-2',
        title: '100s of ready to use models',
        description: 'Start with pre-built workflows. or build your own',
        image: '/images/features/ready-to-use-models.avif',
    },
    {
        className: 'col-span-2',
        title: 'Integrate with the tools you use',
        description: 'Over 200 apps ready to be integrated',
        image: '/images/features/integration-tools.avif',
    },
    {
        className: 'col-span-2',
        title: 'Share the workflow in single click',
        description:
            'Automated your boring task? Share it with your colleague, friend or boss in a single click',
        image: '/images/features/share-flow.avif',
    },
];

export const Features: FC<IProps> = () => {
    return (
        <div className="md:px-10 py-6 flex flex-col gap-6 items-center h-18 max-w-7xl mx-auto">
            <span className="text-primary text-sm font-semibold">FEATURES</span>
            <h1 className="text-black text-3xl font-bold max-w-lg text-center font-mono">
                Automate Your Business Process by Dragging This and That
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                {items.map((each) => (
                    <div
                        className={`flex flex-col rounded-lg bg-white ${each.className}`}
                        key={each.title}
                    >
                        <Image
                            src={each.image}
                            alt={each.title}
                            width={592}
                            height={264}
                        />
                        <div className="flex flex-col gap-2 p-4">
                            <h3 className="text-text-primary font-semibold">
                                {each.title}
                            </h3>
                            <p className="text-text-tertiary">
                                {each.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
