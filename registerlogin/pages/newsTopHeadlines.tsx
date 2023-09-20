import CardNewsTopHeadlines from "@/components/CardNewsTopHeadlines"
import getDataTopHeadlines from "@/services/api/getDataTopHeadlines"
import { INewsTopHeadlines } from "@/types/dataTopHeadline"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

const useTopHeadlines = () => {
    const [topHeadlines, setTopHeadlines] = useState<INewsTopHeadlines[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getDataTopHeadlines();
                setTopHeadlines(data)
            } catch (error) {
                console.log("Erro ao buscar os dados da API:", error)
                Swal.fire(
                    'Indisponível no momento!',
                    'Pois para aparecer as notícias da API precisaria assinar um plano PRO na vercel!',
                    'error'
                  )
            }
        }
        fetchData()
    }, [])


    return (
        <>
            <div className="flex items-center justify-center">
                <span className="font-semibold text-4xl text-black">Portal de Notícias</span>
            </div>

            <div className="flex flex-wrap mx-auto w-4/5 justify-center ">
                {topHeadlines.map((item, index) => (
                    <div key={index} className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 mb-4">
                        <CardNewsTopHeadlines
                            author={item.author}
                            title={item.title}
                            url={item.url}
                            urlToImage={item.urlToImage}
                            publishedAt={item.publishedAt}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default useTopHeadlines
