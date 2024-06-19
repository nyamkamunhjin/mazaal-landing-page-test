import { NextPage } from 'next';
import React from 'react';

interface IProps {
    post: any;
}

/**
 * @author
 * @function @Blog
 **/

const Blog: NextPage<IProps> = ({ post }) => {
    return <div className="text-black">{post}</div>;
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
    const posts = await res.json();

    console.log({ posts });

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
