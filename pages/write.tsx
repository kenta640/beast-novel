import {Navbar} from '../components/Navbar'
import { useFetchUser, } from "./api/hooks/user.hooks"
import {NovelByAuthor} from "../components/novelsByAuthor"
export interface IInputProps {
  className?: string;
  type?: string;
  placeholder?: string;
  onChange?: (e?: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
}


// @ts-ignore to ignore the type checking errors on the next line in a TypeScript
function Write() {
  const {data: userData, isLoading }= useFetchUser(14)
    if (isLoading) {
        return(<>
        <Navbar/>
        <p>Loading...</p>
        </>)
    }
    const user = userData.data
    return (
      <div>
      <Navbar/>
     <p>User: {
     JSON.stringify(user.name)
     
     
     }</p>
     <p>{
     JSON.stringify(user.email)
     
     
     }</p>
     <div className="grid grid-cols-5 gap-4">
       <div></div>
       <div></div>
        <button className="bg-transparent hover:bg-red-300 text-red-400 font-semibold hover:text-white py-2 px-4 border border-red-300 hover:border-transparent rounded">
          New Novel
        </button>
        <div></div>
        <div></div>
     </div>

     <NovelByAuthor user_id = {user.id}/>
      </div>);
}
 export default Write