import Head from 'next/head';
import {Navbar} from '../components/Navbar'
import { useSession, signIn, signOut } from "next-auth/react"
import { useGetNovels } from "./api/hooks/novel.hooks";
import Link from "next/link"

function Home() {
  const {data: novels, isLoading} = useGetNovels();

    return (
      <div>
        <Navbar/>
        <Head>
          <title>Beast Novel</title>

        </Head>
        <div className="grid grid-cols-5 gap-4">
          <div></div>
          <div className="col-span-3">
          {!isLoading ? 
          (<ul>
            {  // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
            novels?.data.map(x => 
              <>
              <li key={x.title} className = "bg-gray-100 hover:bg-gray-200">
                <div className = "flow-root">
                  <p className = "float-left">
                  
                  <Link href= {`/NovelDetails/${encodeURIComponent(x.id)}`}>
                    <a className = "hover:text-green-500"> {x.title} </a>
                  </Link>
                  </p>
                  <p className = "float-right">
                  <Link href={`/UserDetails/${encodeURIComponent(x.user_id)}`}>
                    <a className = "hover:text-green-500"> User Page </a>
                  </Link>
                  </p>
                </div>
                <p>{x.published_date}</p>  
              </li>
              </>
            )
            }
          </ul>) : 'Loading...'}
          </div>
          <div></div>
      </div>
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
