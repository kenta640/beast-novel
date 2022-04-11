import { useRouter } from 'next/router'
import {Navbar} from '../../components/Navbar'
const UserPage=()=> {
    const router = useRouter()
    const { user_id } = router.query

    return(<>
    <Navbar/>
     <p>User: {user_id}</p>
    </>)
}

export default UserPage;