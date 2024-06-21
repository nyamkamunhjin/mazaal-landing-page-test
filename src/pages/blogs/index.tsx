import React, { FC } from 'react';
import { Posts } from '../../interface';
import { Layout } from '../../components/layout';

interface IProps {
    posts: Posts;
}

/**
 * @author
 * @function @BlogPage
 **/

const BlogPage: FC<IProps> = ({ posts }) => {
    return (
        <Layout
            meta={{
                title: 'Mazaal AI - Blogs',
                description:
                    'Experience the transformative power of AI with Mazaal. Our no-code platform offers a simple, affordable way to leverage AI for your business.',
                image: `${process.env.URL}/mazaal-screen-image.jpeg`,
                url: `${process.env.URL}`,
                keywords: 'ai, automation, business, easy, pricing',
            }}
        >
            <div className="tw-text-black tw-flex tw-flex-col tw-gap-4 tw-w-full tw-max-w-5xl">
                <h1 className="tw-text-4xl tw-font-mono tw-mx-auto">Blogs</h1>
                <div>
                    {posts.data.map((post) => (
                        <div
                            className="tw-rounded-lg tw-flex tw-flex-col tw-gap-2 tw-bg-background tw-max-w-md tw-p-4"
                            key={post.id}
                        >
                            <h2 className="tw-text-2xl tw-font-medium">
                                {post.attributes.title}
                            </h2>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: post.attributes.data,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default BlogPage;

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
    const res = await fetch(`${process.env.STRAPI_HOST}/api/blogs`, {
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
        },
    });
    const posts: Posts = await res.json();

    return {
        props: {
            posts,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    };
}
