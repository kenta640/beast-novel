import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { unstable_getServerSession } from "next-auth/next"
import Layout from "../components/layout"
import AccessDenied from "../components/access-denied"
import {Navbar} from '../components/Navbar'
import { useFetchUser, } from "./api/hooks/user.hooks"
import {NovelByAuthor} from "../components/novelsByAuthor"
import Link from "next/link"
import { useRouter } from "next/router"
import { authOptions } from "./api/auth/[...nextauth]"


export interface IInputProps {
  className?: string;
  type?: string;
  placeholder?: string;
  onChange?: (e?: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
}

// @ts-ignore to ignore the type checking errors on the next line in a TypeScript

export async function getServerSideProps(context: GetServerSidePropsContext) {


  return {
    props: {
      session: await unstable_getServerSession(
        context.req,
        context.res,
        authOptions
      ),
    },
  }
}


// @ts-ignore to ignore the type checking errors on the next line in a TypeScript
function Write({ session }: { session: Session }) {

  


    //access server to aquire user id
    // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
    
    // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
    const {data: userData, isLoading}=useFetchUser(session?.user?.email)
    
    if(isLoading){
      return <>Loading...</>
    }

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
     {<NovelByAuthor user_id = {userData?.data?.id}/>}
      </div>);
}
 export default Write