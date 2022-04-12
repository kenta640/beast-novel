import { useRouter } from 'next/router'
import {Navbar} from '../../components/Navbar'
import { useFetchUser, } from "../api/user.hooks";
const UserPage=()=> {
    const router = useRouter()
    const { user_id } = router.query
    //console.log(user_id)
    //console.log(useFetchUser(user_id))
    return(<>
    <Navbar/>

     <p>User: {useFetchUser(user_id).data}</p>
    </>)
}

export default UserPage;