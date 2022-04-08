import Head from 'next/head';
import {Navbar} from '../components/Navbar'
import { useSession, signIn, signOut } from "next-auth/react"


function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
           <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  if (status === "authenticated") {
    return (
      <div>
        <Navbar/>
        <Head>
          <title>Create Next App</title>
         
        </Head>
        {<div>Signed in as {session.user?.email}</div>}
      </div>);
  }
  if (status === "unauthenticated") {
  
    return (

      <div>

        Click to sign into your user account <br />

        <button className='bg-google-500 hover:bg-google-700 text-white font-bold py-2 px-4 rounded' onClick={() => signIn()}>Sign in</button>

      </div>

    );
  }
}
 export default Home

  