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
    novel_id: number,
    text: string
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
        <div >
       
       <form onSubmit={handleSubmit(useAddEpisode)}className="grid grid-cols-5 gap-4" >
        <div></div>
        <div className="col-span-3">
        <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="episodeNum">Episode Number</label>
        <input className="py-2 px-3 shadow w-full"
            {...register("episodeNum")}
            id="episodeNum" type="text" autoComplete="name"  
            /><br/>
        
        <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="episode_title">Title</label>
        <input className="py-2 px-3 shadow w-full"
            {...register("episode_title")}
            id="episode_title" type="text" autoComplete="name" required 
            defaultValue="Episode Title"/><br/>
        </div>

        <div></div>
        <div></div>
        <div className="col-span-3">
        <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="header">Header</label>
        <textarea className='py-2 px-3 shadow w-full' required 
                {...register("header")}>
            Write the summary of your episode.
        </textarea><br/>
        </div>
        <div></div>
        <div></div>
        <div className="col-span-3">
        <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="text">Text</label>
        <textarea className='py-2 px-3 shadow w-full' required 
                {...register("text")}>
            Write the text of your episode.
        </textarea><br/>
        </div>
        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
        
        
        
        </form>
        

    </div>
      </div>);
}
 export default NewEpisode