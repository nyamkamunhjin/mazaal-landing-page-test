export interface Posts {
    data: PostData[];
    meta: Meta;
}

export interface PostData {
    id: number;
    attributes: Attributes;
}

export interface Attributes {
    title: string;
    data: string;
    author_name: string;
    author_avatar: { data: ImageData };
    blog_category: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    shortText?: string;
    cover_image: { data: ImageData };
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface ImageData {
    id: number;
    attributes: ImageAttributes;
}

export interface ImageAttributes {
    name: string;
    alternativeText: any;
    caption: any;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: any;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
}

export interface Formats {
    large: Large;
    small: Small;
    medium: Medium;
    thumbnail: Thumbnail;
}

export interface Large {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: any;
    size: number;
    width: number;
    height: number;
}

export interface Small {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: any;
    size: number;
    width: number;
    height: number;
}

export interface Medium {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: any;
    size: number;
    width: number;
    height: number;
}

export interface Thumbnail {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: any;
    size: number;
    width: number;
    height: number;
}
