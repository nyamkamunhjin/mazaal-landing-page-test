import { NextPage } from 'next';
import React from 'react';
import { Layout } from '../../components/layout';
import { PostData, Posts } from '../../interface';

interface IProps {
    post: PostData;
}

const Blog: NextPage<IProps> = ({ post }) => {
    const { title, data, author_name, createdAt } = post.attributes;

    return (
        <Layout meta={{}}>
            <article className=" tw-max-w-4xl tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8 tw-py-8 tw-text-black">
                <h1 className=" tw-text-4xl tw-font-bold tw-mb-4">{title}</h1>
                <div className="tw-text-gray-500 tw-mb-8">
                    <p>
                        {author_name ? `By ${author_name}` : 'Unknown Author'} |{' '}
                        2024-06-20
                    </p>
                </div>
                <div
                    className="blog"
                    dangerouslySetInnerHTML={{ __html: data }}
                />
            </article>
        </Layout>
    );
};

export default Blog;
// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
    const res = await fetch(`${process.env.STRAPI_HOST}/api/blogs`, {
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
        },
    });
    const { data: posts } = await res.json();

    console.dir({ posts }, { depth: null });

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post: any) => ({
        params: { slug: post.attributes.slug },
    }));

    console.dir({ paths }, { depth: null });

    // We'll pre-render only these paths at build time.
    // { fallback: 'blocking' } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({ params }: { params: { slug: string } }) {
    console.log({ params });
    const res = await fetch(
        `${process.env.STRAPI_HOST}/api/blogs?filters[slug][$eq]=${params.slug}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
            },
        }
    );
    const posts: Posts = await res.json();

    const post = posts.data[0];

    return {
        props: {
            post,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    };
}
