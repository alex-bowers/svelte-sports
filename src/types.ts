export interface iArticle {
    auth: string,
    content: string,
    description: string,
    published_At: string,
    source: iArticleSource,
    title: string,
    url: string,
    urlToImage: string
}

export interface iArticleSource {
    id: number | null,
    name: string
}
