export interface iArticle {
    author: string,
    content: string,
    description: string,
    publishedAt: string,
    source: iSource,
    title: string,
    url: string,
    urlToImage: string
}

export interface iVideo {
    author: null,
    content: null,
    description: null,
    publishedAt: string,
    source: iSource,
    title: string,
    url: string,
    urlToImage: null
}

export interface iSource {
    id: string | null,
    name: string
}
