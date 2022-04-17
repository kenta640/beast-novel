import { useRouter } from 'next/router'
import {useGetEpisodes} from "../api/auth/episode.hooks"
import {Navbar} from "../../components/Navbar"
import { json } from "stream/consumers"
 // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
const NovelPage=()=> {

    
    const router = useRouter()
    const { novel_id } = router.query
    const {data: episodes, isLoading} = useGetEpisodes(novel_id)
    return (
        <div>
            <Navbar/>
            <div className="grid grid-cols-5 gap-4">
                <div></div>
                <div className="col-span-3">
                    {
                        !isLoading? (
                            <ul>
                                {// @ts-ignore to ignore the type checking errors on the next line in a TypeScript
                                    episodes?.data.map(x =>
                                            <>
                                            <li key={x.episode_title} className = "bg-gray-100 hover:bg-gray-200">
                                            <div className = "flow-root">
                                            <a className = "hover:text-green-500"> {x.episode_title} </a>
                                            </div>
                                            </li>
                                            </>
                                        )
                                }
                            </ul>
                        ) : 'Loading...'
                    }
                </div>
                <div></div>
            </div>
        </div>
    )
    

}

export default NovelPage