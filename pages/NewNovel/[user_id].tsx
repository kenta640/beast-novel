import {Navbar} from '../../components/Navbar'
import Link from "next/link"
import {useAddNovel} from '../api/hooks/novel.hooks'
import {useForm, SubmitHandler} from "react-hook-form"
import {useMutation} from "react-query"
import router from 'next/router'
import axios from 'axios'
type Inputs = {
    title: string,
    summary: string,
    user_id: number
  };

  export const errorUtils = {
    // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
    getError: (error) => {
      let e = error;
      if (error.response) {
        e = error.response.data;                   // data, status, headers
        console.log(e)
        if (error.response.data && error.response.data.error) {
          e = error.response.data.error;           // my app specific keys override
         console.log(e)
        }
      } else if (error.message) {
        console.log(error.message)
        e = error.message;
      } else {
        e = "Unknown error occured";
      }
      return e;
    },
  };

function NewNovel() {
    // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
    const { register, 
            handleSubmit, 
            setValue, 
            formState: { errors } 
        } = useForm<Inputs>({mode: "onBlur"});   
    // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
        const postNovel= async (newNovel) =>
        
                await (await axios.post('https://fastify-server-app.herokuapp.com/addNovel', 
                {
                    title: newNovel.title,
                    summary: newNovel.summary,
                    user_id: 24,
                }).catch(errorUtils.getError)).data
    
    return (
        <div><Navbar/>
        <div >
       
       <form onSubmit={handleSubmit(postNovel)}className="grid grid-cols-5 gap-4" >
        <div></div>
        <div className="col-span-3">
        <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="title">Title</label>
        <input className="py-2 px-3 shadow w-full"
            {...register("title")}
            id="title" type="text" autoComplete="name" required 
            defaultValue="Title"/><br/>
        </div>
        <div></div>
        <div></div>
        <div className="col-span-3">
        <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="summary">Summary</label>
        <textarea className='py-2 px-3 shadow w-full' required 
                {...register("summary")}>
            Write the summary of your novel.
        </textarea><br/>
        </div>
        <div></div>
        <div></div>
        <div></div>

        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
        
        
        
        </form>
        

    </div>
      </div>);
}
 export default NewNovel