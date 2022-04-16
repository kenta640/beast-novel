import { useRouter } from 'next/router'
import {Navbar} from '../../components/Navbar'
import { useFetchUser, } from "../api/auth/user.hooks"
import {NovelByUser} from "../../components/novelsByUser"
import {useGetNovelByUser} from "../../components/api/novelByUser.hooks"
const UserPage=()=> {
    const router = useRouter()
    const { user_id } = router.query
    //console.log(user_id)
    //console.log(useFetchUser(user_id))
    const {data: userData, isLoading }= useFetchUser(user_id)
    if (isLoading) {
        return(<>
        <Navbar/>
        <p>Loading...</p>
        </>)
    }
    const user = userData.data
    return(<>
    <Navbar/>
     <p>User: {
     JSON.stringify(user.name)
     
     
     }</p>
     <p>{
     JSON.stringify(user.email)
     
     
     }</p>
     
     <NovelByUser user_id = {user.id}/>
    </>)
}

export default UserPage;