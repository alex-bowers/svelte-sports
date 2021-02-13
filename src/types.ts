export interface IArticle {
    author: string | null,
    content: string | null,
    description: string | null,
    publishedAt: string,
    source: IArticleSource,
    title: string,
    url: string,
    urlToImage: string | null
}

export interface IArticleSource {
    id: string | null,
    name: string
}
