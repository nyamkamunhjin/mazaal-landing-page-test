import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { Layout } from '../../components/layout';
import { PostData, Posts } from '../../interface';
import { load } from 'cheerio';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
interface IProps {
    post: PostData;
    tableOfContents: { id: string; text: string }[];
}

const BlogSlugPage: NextPage<IProps> = ({ post, tableOfContents }) => {
    const router = useRouter();
    const [currentHash, setCurrentHash] = useState('');

    useEffect(() => {
        const hash = router.asPath.split('#')[1] || '';
        setCurrentHash(hash);
    }, [router.asPath]);

    const { title, data, author_name, slug, createdAt, author_avatar } =
        post.attributes;

    return (
        <Layout
            meta={{
                title,
                description: data.slice(0, 100),
                image: '',
                keywords: title,
                url: `${process.env.URL}/blogs/${slug}`,
            }}
        >
            <article className="tw-max-w-4xl tw-mx-auto tw-px-4 tw-py-8 tw-text-black tw-flex tw-flex-col tw-gap-2">
                <h1 className=" tw-text-4xl tw-font-bold tw-mb-4">{title}</h1>
                <span className="tw-text-black tw-text-sm">
                    {moment(createdAt).format('MMMM DD, YYYY')} {}
                </span>
                <div className="tw-relative tw-flex tw-flex-col-reverse lg:tw-flex-row tw-gap-10">
                    <div
                        className="blog tw-max-w-3xl tw-w-full"
                        dangerouslySetInnerHTML={{ __html: data }}
                    />
                    <div className="tw-flex tw-flex-col tw-gap-1 tw-min-w-[200px] tw-w-full tw-px-0 tw-text-sm tw-mt-2">
                        <div className="tw-text-gray-500 tw-flex tw-gap-2 tw-items-center">
                            <Image
                                className="tw-rounded-full tw-w-10 tw-h-10 tw-object-cover"
                                src={
                                    author_avatar.data.attributes.formats
                                        .thumbnail.url
                                }
                                width={150}
                                height={150}
                                alt={author_name}
                            />
                            <p>
                                {author_name
                                    ? `${author_name}`
                                    : 'Unknown Author'}
                            </p>
                        </div>
                        <div className="tw-sticky tw-top-0 tw-flex tw-flex-col tw-gap-2">
                            <h6 className="tw-border-b tw-border-primary tw-py-4">
                                TABLE OF CONTENTS
                            </h6>
                            {tableOfContents.map((each) => (
                                <Link
                                    className={`${
                                        currentHash === each.id
                                            ? 'tw-text-primary'
                                            : 'tw-text-gray-500'
                                    } hover:tw-text-primary tw-transition-colors tw-duration-200`}
                                    href={`#${each.id}`}
                                    key={each.id}
                                >
                                    {each.text}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default BlogSlugPage;
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

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post: any) => ({
        params: { slug: post.attributes.slug },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: 'blocking' } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({ params }: { params: { slug: string } }) {
    const res = await fetch(
        `${process.env.STRAPI_HOST}/api/blogs?filters[slug][$eq]=${params.slug}&populate=author_avatar`,
        {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
            },
        }
    );
    const posts: Posts = await res.json();

    const post = posts.data[0];

    const $ = load(post.attributes.data);

    const tableOfContents: { id: string; text: string }[] = [];

    $('h1, h2, h3, h4, h5, h6').each((index, element) => {
        const id = $(element).attr('id');
        const text = $(element).text();

        if (id) tableOfContents.push({ id, text });
    });

    return {
        props: {
            post,
            tableOfContents,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    };
}
