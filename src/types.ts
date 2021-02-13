export interface iArticle {
    author: string | null,
    content: string | null,
    description: string | null,
    publishedAt: string,
    source: iArticleSource,
    title: string,
    url: string,
    urlToImage: string | null
}

export interface iArticleSource {
    id: string | null,
    name: string
}
