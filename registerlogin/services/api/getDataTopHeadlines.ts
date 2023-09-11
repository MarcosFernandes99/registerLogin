import adapterTopHeadlines from "@/shared/adapters/adapterTopHeadlines"
import { TopHeadlines } from "@/types/dataTopHeadline"

const getDataTopHeadlines = async () => {
    const keyCode = "7a042023825e4311b2bb74227aba42a7"
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${keyCode}`)
    const topHeadlines: TopHeadlines = await response.json()
    console.log(topHeadlines)
    const adaptedResponse = adapterTopHeadlines(topHeadlines)
    console.log(adaptedResponse)    
    
    return adaptedResponse
}

export default getDataTopHeadlines