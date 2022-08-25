import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import Layout from "../components/layout"
import AccessDenied from "../components/access-denied"
import {Navbar} from '../components/Navbar'
import { useFetchUser, } from "./api/hooks/user.hooks"
import {NovelByAuthor} from "../components/novelsByAuthor"
import Link from "next/link"
import { useRouter } from "next/router"
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import type { GetServerSidePropsContext } from "next"

export interface IInputProps {
  className?: string;
  type?: string;
  placeholder?: string;
  onChange?: (e?: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {


  return {
    props: {
      props: {
        session: await unstable_getServerSession(
          context.req,
          context.res,
          authOptions
        ),
      },
    },
  }
}

// @ts-ignore to ignore the type checking errors on the next line in a TypeScript
function Write({ session }: { session: Session }) {
  const router = useRouter();
  const { user_id } = router.query

  
  

    //access server to aquire user id
    // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
    
    // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
   
    
    if(isLoading){
      return <>Loading...</>
    }

    //console.log(userData)
    
    
    
    return (
      <div>
      <Navbar/>
     <pre>User: {
     JSON.stringify(session?.props?.name)
     }</pre>
     <pre>{
     JSON.stringify(session?.props?.email)
     }</pre>
     <div className="grid grid-cols-5 gap-4">
       <div></div>
       <div></div>
       <Link href="/newNovel">
        <button
        className="bg-transparent hover:bg-red-300 text-red-400 font-semibold hover:text-white py-2 px-4 border border-red-300 hover:border-transparent rounded">
          New
        </button>
       </Link>
        <div></div>
        <div></div>
     </div>

     <></>
     {/**<NovelByAuthor user_id = {user.}/>**/}
      </div>);
}
 export default Write