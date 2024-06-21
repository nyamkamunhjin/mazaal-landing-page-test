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
    author_avatar: string;
    blog_category: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
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
