import {Navbar} from '../../../components/Navbar'
import Link from "next/link"
import {useAddNovel} from '../../api/hooks/novel.hooks'
import {useForm, SubmitHandler} from "react-hook-form"
import {useMutation} from "react-query"
import axios from 'axios'
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import Layout from "../../../components/layout"
import AccessDenied from "../../../components/access-denied"
import {errorUtils} from "../../../components/axiosErrorUtils"
import {useFetchUser} from "../../api/hooks/user.hooks"
import { useRouter } from 'next/router'
type Inputs = {
    episodeNum: number,
    episode_title: string,
    header: string,
    novel_id: number
  };



function NewEpisode() {

  const router = useRouter()
    // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
    const { register, 
            handleSubmit, 
            setValue, 
            formState: { errors } 
        } = useForm<Inputs>({mode: "onBlur"});   
    const { novel_id } = router.query

    const { data: session, status } = useSession()
    const loading = status === "loading"
    const [content, setContent] = useState()
  
    // Fetch content from protected route
    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch("/api/examples/protected")
        const json = await res.json()
        if (json.content) {
          setContent(json.content)
        }
      }
      fetchData()
    }, [session])
  
    // When rendering client side don't display anything until loading is complete
    if (typeof window !== "undefined" && loading) return null
  
    // If no session exists, display access denied message
    if (!session) {
      return (
        <Layout>
          <AccessDenied />
        </Layout>
      )
    }


    //const {data: userData, isLoading} = useAddEpisode(364)


                    // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
        const useAddEpisode= async (newEpisode) =>{
        
      
          //console.log(userData?.data?.id)
          await (await axios.post('https://fastify-server-app.herokuapp.com/addEpisode', 
          {
              episode_title: newEpisode.episode_title,
              header: newEpisode.header,
              novel_id: novel_id
          }).catch(errorUtils.getError)).data
        
      }
    
    return (
        <div><Navbar/>

      </div>);
}
 export default NewEpisode