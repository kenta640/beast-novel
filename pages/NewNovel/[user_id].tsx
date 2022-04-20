import {Navbar} from '../../components/Navbar'
import Link from "next/link"
function NewNovel() {
    // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
    const addNewNovel = event => {
        event.preventDefault() // don't redirect the page
        // where we'll add our form logic
    }
    return (
        <div><Navbar/>
        <div >
       
       <form onSubmit={addNewNovel}className="grid grid-cols-5 gap-4" >
        <div></div>
        <div className="col-span-3">
        <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="title">Title</label>
        <input className="py-2 px-3 shadow w-full" id="name" type="text" autoComplete="name" required /><br/>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
        </div>
        <div></div>
        </form>
        

    </div>
      </div>);
}
 export default NewNovel