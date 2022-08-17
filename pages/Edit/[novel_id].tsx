
import { useRouter } from 'next/router'
import {Navbar} from '../../components/Navbar'
import {useFetchEpisodes} from "../api/hooks/episode.hooks"
import Link from "next/link"

const EditNovel=()=> {
    const router = useRouter()
    const { novel_id } = router.query
    console.log(novel_id)
    const {data: episodes, isLoading} = useFetchEpisodes(novel_id)
    
    return(<>
    <Navbar/>
    <div className="grid grid-cols-5 gap-4">
                <div></div>
                {/** @ts-ignore to ignore the type checking errors on the next line in a TypeScript**/}
                <Link href={`/NewEpisode/${encodeURIComponent(novel_id)}`}>
                <button
                    className="bg-transparent hover:bg-red-300 text-red-400 font-semibold 
                    hover:text-white py-2 px-4 border border-red-300 hover:border-transparent rounded">
                    New Episode
                </button>
                </Link>
                <div></div>
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
                                            <Link href= {`/Edit/EditEpisode/${encodeURIComponent(x.id)}`}>
                                                <a className = "hover:text-green-500"> {x.episode_title} </a>
                                            </Link>
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
    </>)
}

export default EditNovel;