import { useRouter } from 'next/router'
import {Navbar} from '../../components/Navbar'
import { useFetchUser, } from "../api/hooks/user.hooks"
import {NovelByUser} from "../../components/novelsByUser"
import {useGetNovelByUser} from "../../components/api/novelByUser.hooks"
import { useSession } from "next-auth/react"
const UserPage=()=> {
    const router = useRouter()
    const { data: session, status } = useSession()
    //console.log(user_id)
    //console.log(useFetchUser(user_id))
     // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
    const {data: userData, isLoading }= useFetchUser(session?.user)
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