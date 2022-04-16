import {useGetNovel} from "../api/auth/novel.hooks"
import {Navbar} from "../../components/Navbar"
import { json } from "stream/consumers"
 // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
const NovelPage=(novel_id)=> {

    const {data: data, isLoading} = useGetNovel(novel_id)
    console
    if(isLoading){
        return(
    
            <>
            <Navbar/>
            { 
                
                JSON.stringify(data)
                
            }
            </>)
    }

}

export default NovelPage