import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import Layout from "../components/layout"
import AccessDenied from "../components/access-denied"
import {Navbar} from '../components/Navbar'
import { useFetchUser, } from "./api/hooks/user.hooks"
import {NovelByAuthor} from "../components/novelsByAuthor"
import Link from "next/link"
import { useRouter } from "next/router"



export interface IInputProps {
  className?: string;
  type?: string;
  placeholder?: string;
  onChange?: (e?: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
}


// @ts-ignore to ignore the type checking errors on the next line in a TypeScript
function Write() {
  const router = useRouter();
  const { user_id } = router.query

  const { data: session, status } = useSession()
  const loading = status === "loading"
  const [content, setContent] = useState()
  // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
  const handleClick = (e, path) => {
    // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
    if (path === `/NewNovel/${encodeURIComponent(user_id)}`) {
      console.log("I clicked on the About Page");
    }
  };

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


    if (typeof window !== "undefined" && loading) return null
    if (!session) {
      return (
        <Layout>
          <AccessDenied />
        </Layout>
      )
    }
    //access server to aquire user id
    // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
    
    // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
    const {data: userData, isLoading}=useFetchUser(session?.user?.email)
    
      //console.log(userData)

    
    
    const user = session?.user
    return (
      <div>
      <Navbar/>
     <p>User: {
     JSON.stringify(user?.name)
     }</p>
     <p>{
     JSON.stringify(user?.email)
     }</p>
     <div className="grid grid-cols-5 gap-4">
       <div></div>
       <div></div>
       <Link href="/NewNovel/newNovel">
        <button
        className="bg-transparent hover:bg-red-300 text-red-400 font-semibold hover:text-white py-2 px-4 border border-red-300 hover:border-transparent rounded">
          New
        </button>
       </Link>
        <div></div>
        <div></div>
     </div>

     {/**<NovelByAuthor user_id = {userData?.id}/>**/}
      </div>);
}
 export default Write