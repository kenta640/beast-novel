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
function Write({pizzas}) {
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
     
     <NovelByAuthor user_id = {user.id}/>
      </div>);
}
 export default Write