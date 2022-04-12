import {useGetNovels} from "../api/novel.hooks"
import {Navbar} from "../../components/Navbar"
const NovelPage=()=> {
    return(
    
    <>
    <Navbar/>
    {useGetNovels()}
    </>)
}

export default NovelPage