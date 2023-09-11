export interface TopHeadlines {
    status: string
    totalResults: number
    articles: Article[]
  }
  
  export interface Article {
    source: Source
    author: string
    title: string
    description: any
    url: string
    urlToImage: string
    publishedAt: string
    content: any
  }
  
  export interface Source {
    id: string
    name: string
  }

  export interface INewsTopHeadlines {
    author: string
    title: string
    url: string
    urlToImage: string
    publishedAt: string
  }
  