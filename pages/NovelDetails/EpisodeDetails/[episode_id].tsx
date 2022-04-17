import { useRouter } from 'next/router'
import {useFetchText} from '../../api/hooks/text.hooks'
const EpisodePage=()=> {
    const router = useRouter()
    const { episode_id } = router.query
    const {data: text, isLoading} = useFetchText(episode_id)
    return(<>
        {
            !isLoading?
            (
               <p>{text}</p> 
                ): "Loading..."
        }
    </>)
}

export default EpisodePage;