import { useRouter } from 'next/router'
import {useFetchEpisodes} from "../api/hooks/episode.hooks"
import {Navbar} from "../../components/Navbar"
import { json } from "stream/consumers"
import Link from "next/link"
import { useState, useEffect } from "react";
 // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
const NovelPage : React.FunctionComponent <RouteComponentProps<any>>=()=> {

    
    const router = useRouter()
    const query = router.query;

    const [data, setData] = useState([]);
    //Failed to configure react query
    // @ts-ignore to ignore the type checking errors on the next line in a TypeScript



    //console.log(novel_id)
    const {data: episodes, isLoading} = useFetchEpisodes(query.novel_id)

    return (
        <div>
            <Navbar/>
            <div className="grid grid-cols-5 gap-4">
                <div></div>
                {!isLoading ? 
          (
                <div className="col-span-3">
                    {
                       
                            <ul>
                                {// @ts-ignore to ignore the type checking errors on the next line in a TypeScript
                                    episodes?.data.map(x =>
                                            <>
                                            <li key={x.episode_title} className = "bg-gray-100 hover:bg-gray-200">
                                            <div className = "flow-root">
                                            <Link href= {`/EpisodeDetails/${encodeURIComponent(x.id)}`}>
                                                <a className = "hover:text-green-500"> {x.episode_title} </a>
                                            </Link>
                                            </div>
                                            </li>
                                            </>
                                        )
                                }
                            </ul>
                        
                    }
                </div>): 'Loading...'}
                <div></div>
            </div>
        </div>
    )

}

export default NovelPage