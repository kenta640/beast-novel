import {useGetNovelByUser} from "./api/novelByUser.hooks"
import Link from "next/link"

// @ts-ignore to ignore the type checking errors on the next line in a TypeScript
export const NovelByUser = (user_id) => {
// @ts-ignore to ignore the type checking errors on the next line in a TypeScript
 const {data, isLoading, status} = useGetNovelByUser(user_id.user_id)
 return(
 <div className="grid grid-cols-5 gap-4">
          <div></div>
          <div className="col-span-3">
          {!isLoading ? 
          (
          <ul>
            {
              console.log(data)
            }
            {  // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
            data?.data.map(x => 
              <>
              <li key={x.title} className = "bg-gray-100 hover:bg-gray-200">
                <div className = "flow-root">
                  <p className = "float-left">
                  <Link href= {`/NovelDetails/${encodeURIComponent(x.id)}`}>
                    <a className = "hover:text-green-500"> {x.title} </a>
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
 )

 
};