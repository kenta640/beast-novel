import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import Layout from "../components/layout"
import AccessDenied from "../components/access-denied"
import {Navbar} from '../components/Navbar'
import { useFetchUser, } from "./api/hooks/user.hooks"
import {NovelByAuthor} from "../components/novelsByAuthor"
import Link from "next/link"
import { useRouter } from "next/router"
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import type { GetServerSidePropsContext } from "next"
import type { Session } from "next-auth"
export interface IInputProps {
  className?: string;
  type?: string;
  placeholder?: string;
  onChange?: (e?: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
}

//comment

export default function Write({ session }: { session: Session }) {
  console.log(session?.user?.email)
  
    const {data: userData, isLoading} = useFetchUser(session?.user?.email)
    if(isLoading){
      console.log("Loading")
      return(<>Loading...</>)
    }
    //console.log(userData)
    return (
      <div>
        <Navbar/>
        <p>User: </p>
        <pre>{JSON.stringify(session, null, 2)}</pre>
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
          {<NovelByAuthor user_id = {userData?.data?.id}/>}
       </div>
      </div>
    )
  
 
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      session: await getServerSession(
        context.req,
        context.res,
        authOptions
      ),
    },
  }
}
