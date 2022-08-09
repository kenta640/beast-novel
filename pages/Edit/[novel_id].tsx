
import { useRouter } from 'next/router'
import {Navbar} from '../../components/Navbar'
import {useGetEpisodes} from "../api/hooks/episode.hooks"
import Link from "next/link"

const EditNovel=()=> {
    const router = useRouter()
    const { user_id } = router.query
    console.log(user_id)
    const {data: episodes, isLoading} = useGetEpisodes(user_id)
    
    return(<>
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