import React, { FC } from 'react';
import { PostData, Posts } from '../../interface';
import { Layout } from '../../components/layout';
import { convert } from 'html-to-text';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
interface IProps {
    posts: PostData[];
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
            <div className="tw-text-black tw-flex tw-flex-col tw-gap-4 tw-w-full tw-max-w-5xl tw-mx-auto">
                <h1 className="tw-text-4xl tw-font-mono tw-mx-auto">Blogs</h1>
                <div>
                    {posts.map((post) => (
                        <div
                            className="tw-rounded-lg tw-flex tw-flex-col tw-gap-2 tw-max-w-sm tw-p-4"
                            key={post.id}
                        >
                            <Image
                                className="tw-rounded-lg"
                                src={
                                    post.attributes.cover_image.data.attributes
                                        .formats.medium.url
                                }
                                alt={post.attributes.title}
                                width={500}
                                height={500}
                            />
                            <h2 className="tw-text-xl tw-font-medium">
                                {post.attributes.title}
                            </h2>
                            <p className="tw-text-sm tw-text-gray-500">
                                {post.attributes.shortText}
                            </p>
                            <Link
                                className="tw-flex tw-gap-1 tw-items-center tw-text-primary tw-text-sm"
                                href={`/blogs/${post.attributes.slug}`}
                            >
                                Read More
                                <ArrowRightIcon className="tw-w-3.5 tw-h-3.5 " />
                            </Link>
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
    const res = await fetch(`${process.env.STRAPI_HOST}/api/blogs?populate=*`, {
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
        },
    });
    const posts: Posts = await res.json();

    // console.dir(JSON.stringify(posts.data[0].attributes.cover_image), {
    //     depth: null,
    // });

    const postsWithShortText = [];

    for (const post of posts.data) {
        const shortText =
            (convert(post.attributes.data) || '')
                .split(' ')
                .slice(0, 10)
                .join(' ') + '...';

        const copyPost: PostData = JSON.parse(JSON.stringify(post));

        copyPost.attributes.shortText = shortText;

        postsWithShortText.push(copyPost);
    }

    return {
        props: {
            posts: postsWithShortText,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    };
}
