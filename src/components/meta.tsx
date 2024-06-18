import Head from 'next/head';

export interface MetaTagProps {
    title: string;
    description: string;
    keywords: string;
    image: string;
    url: string;
}

const Meta: React.FC<MetaTagProps> = ({
    title,
    description,
    image,
    keywords,
    url,
}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Mazaal AI" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:site" content="@Mazaal_AI" />
            <meta name="twitter:creator" content="@Mazaal_AI" />
            <meta name="pinterest" content="nopin" />
        </Head>
    );
};

export default Meta;
