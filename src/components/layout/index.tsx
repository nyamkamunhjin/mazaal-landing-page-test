import React, { FC } from 'react';
import { Header } from '../header';
import { Footer } from '../footer';
import Meta, { MetaTagProps } from '../meta';

interface IProps {
    children: React.ReactNode;
    meta: MetaTagProps;
}

/**
 * @author
 * @function @Layout
 **/

export const Layout: FC<IProps> = ({ children, meta }) => {
    return (
        <>
            <main className={`w-full flex flex-col min-h-screen`}>
                <Meta {...meta} />
                <Header />
                {children}
                <div className="max-w-screen-lg w-full mx-auto px-4 mt-auto">
                    <Footer />
                </div>
            </main>
        </>
    );
};
