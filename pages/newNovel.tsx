import {Navbar} from '../components/Navbar'
import Link from "next/link"
import {useAddNovel} from './api/hooks/novel.hooks'
import {useForm, SubmitHandler} from "react-hook-form"
import {useMutation} from "react-query"
import axios from 'axios'
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import Layout from "../components/layout"
import AccessDenied from "../components/access-denied"
import {errorUtils} from "../components/axiosErrorUtils"
import {useFetchUser} from "./api/hooks/user.hooks"
type Inputs = {
    title: string,
    summary: string,
    user_id: number
  };



function NewNovel() {
    // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
    const { register, 
            handleSubmit, 
            setValue, 
            formState: { errors } 
        } = useForm<Inputs>({mode: "onBlur"});   


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


    const {data: userData, isLoading} = useFetchUser(session?.user?.email)

    if(isLoading){
      <>
      User Data Loading
      </>
    }
                    // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
        const postNovel= async (newNovel) =>{
        
      
          console.log(userData?.data?.id)
          await (await axios.post('https://beast-novel-server.herokuapp.com/addNovel', 
          {
              title: newNovel.title,
              summary: newNovel.summary,
              user_id: userData?.data?.id,
          }).catch(errorUtils.getError)).data
        
      }
    
    return (
        <div><Navbar/>
        <div >
       
       <form onSubmit={handleSubmit(postNovel)}className="grid grid-cols-5 gap-4" >
        <div></div>
        <div className="col-span-3">
        <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="title">Title</label>
        <input className="py-2 px-3 shadow w-full"
            {...register("title")}
            id="title" type="text" autoComplete="name" required 
            defaultValue="Title"/><br/>
        </div>
        <div></div>
        <div></div>
        <div className="col-span-3">
        <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="summary">Summary</label>
        <textarea className='py-2 px-3 shadow w-full' required 
                {...register("summary")}>
            Write the summary of your novel.
        </textarea><br/>
        </div>
        <div></div>
        <div></div>
        <div></div>

        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
        
        
        
        </form>
        

    </div>
      </div>);
}
 export default NewNovel