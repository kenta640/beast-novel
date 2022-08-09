import { useRouter } from 'next/router'
import {Navbar} from '../../components/Navbar'
import { useFetchUserById, } from "../api/hooks/user.hooks"
import {NovelByUser} from "../../components/novelsByUser"
import {useGetNovelByUser} from "../../components/api/novelByUser.hooks"
import { useSession } from "next-auth/react"
const UserDetails=()=> {
    const router = useRouter()
    const { data: session, status } = useSession()
    const { user_id } = router.query
    // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
    console.log(useFetchUserById(user_id))
     // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
    
    const {data: userData, isLoading }= useFetchUserById(user_id)
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
     
     {/**<NovelByUser user_id = {user.id}/>*/}
    </>)
}

export default UserDetails;