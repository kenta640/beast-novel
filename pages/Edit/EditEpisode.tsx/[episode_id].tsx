
import {Navbar} from '../../../components/Navbar'
import { useRouter } from 'next/router'
import {useFetchText} from '../../api/hooks/text.hooks'
const EditEpisode=()=> {
    const router = useRouter()
    const { episode_id } = router.query
    const {data: text, isLoading} = useFetchText(episode_id)
    return(<>
    <Navbar/>
        {
            !isLoading?
            (
               <p>{text}</p> 
                ): "Loading..."
        }
    </>)
}

export default EditEpisode;