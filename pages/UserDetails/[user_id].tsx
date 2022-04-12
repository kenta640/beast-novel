import { useRouter } from 'next/router'
import {Navbar} from '../../components/Navbar'
import { useFetchUser, } from "../api/user.hooks";
const UserPage=()=> {
    const router = useRouter()
    const { user_id } = router.query
    //console.log(user_id)
    //console.log(useFetchUser(user_id))
    const {data: userData, isLoading }= useFetchUser(user_id)
    if (isLoading) {
        return(<>Loading...</>)
    }
    return(<>
    <Navbar/>
     <p>User: {
     JSON.stringify(userData.data)
     
     }</p>
    </>)
}

export default UserPage;