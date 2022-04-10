import Head from 'next/head';
import {Navbar} from '../components/Navbar'
import { useSession, signIn, signOut } from "next-auth/react"
import { useGetNovels } from "./api/novel.hooks";


function Home() {
  const {data: novels} = useGetNovels();
  /*const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
           <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }*/

  //if (status === "authenticated") {
    return (
      <div>
        <Navbar/>
        <Head>
          <title>Beast Novel</title>
         
        </Head>
        <h1>{novels}</h1>

      </div>);
  //}
 
  /**if (status === "unauthenticated") {
  
    return (
      
      <div>

        Click to sign into your user account <br />

        <button type = "button" 
        className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        onClick={() => signIn()}>Sign in</button>

      </div>

    );
  }**/
}
 export default Home
