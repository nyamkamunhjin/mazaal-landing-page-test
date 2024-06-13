import React, { FC } from 'react';
import { Header } from '../header';
import { Footer } from '../footer';

interface IProps {
    children: React.ReactNode;
}

/**
 * @author
 * @function @Layout
 **/

export const Layout: FC<IProps> = ({ children }) => {
    return (
        <main className={`w-full flex flex-col min-h-screen`}>
            <Header />
            {children}
            <div className="max-w-screen-lg w-full mx-auto px-4 mt-auto">
                <Footer />
            </div>
        </main>
    );
};
