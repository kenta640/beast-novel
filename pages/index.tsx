import Head from 'next/head';
import {Navbar} from '../components/Navbar'
import { useSession, signIn, signOut } from "next-auth/react"
import { useGetNovels } from "./api/novel.hooks";

interface NovelKeys {
  id: Number,
  title: string,
  published_date: string
}

function Home() {
  const {data: novels, isLoading} = useGetNovels();
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
  //console.log(novels?.data[0].title)
   // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
    /**novels?.data.map(val => ({
      id: val.id,
      title: val.title
    } as NovelKeys));**/
    return (
      <div>
        <Navbar/>
        <Head>
          <title>Beast Novel</title>

        </Head>
        {!isLoading ? 
      (<ul>
        {  // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
        novels?.data.map(x => 
          <>
          <li key={x.title}>{x.title}</li>
          <li key={x.published_date}>{x.published_date}</li>
          </>
        )
        }
      </ul>) : 'Loading...'}

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
