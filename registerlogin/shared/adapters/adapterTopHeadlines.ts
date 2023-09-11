import { TopHeadlines, INewsTopHeadlines } from "@/types/dataTopHeadline"

const adapterTopHeadlines = (topHeadline: TopHeadlines): INewsTopHeadlines[] => {
    const adaptedList: INewsTopHeadlines[] = topHeadline.articles.map(item => {
        return {
            author: item.author,
            title: item.title,
            url: item.url,
            urlToImage: item.urlToImage,
            publishedAt: item.publishedAt
        }
    })
    return adaptedList
}

export default adapterTopHeadlines