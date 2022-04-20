import {Navbar} from '../../components/Navbar'
import Link from "next/link"
function NewNovel() {
    // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
    const addNewNovel = event => {
        event.preventDefault() // don't redirect the page
        // where we'll add our form logic
    }
    return (
        
      <div>
       <Navbar/>
       <form onSubmit={addNewNovel}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" autoComplete="name" required />
        <button type="submit">Register</button>
    </form>

        
      </div>);
}
 export default NewNovel