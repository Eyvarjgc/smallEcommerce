import { type bookList } from "../types"
import "../App.css"

interface Props { 
  books: bookList
}

const ListOfBooks: React.FC<Props> = ({ books }) => { 
  return (
    <div className="flex flex-row justify-center gap-8 flex-wrap relative"> 
      {books.map((item) => (
        <div className="bg-black rounded-3xl p-2 overflow-hidden " >
          <img src={item.thumbnail} alt=""  className="w-[150px] h-[250px]  rounded-3xl m-auto"/>
          <p className="text-left font-semibold font-mono mt-2   ">{item.title}</p>
          <p className="ont-semibold font-mono text-sm  ">{item.category}</p>

          <span className="flex flex-row gap-2 justify-center mt-2 text-sm">
            <p className="bg-orange-950 rounded-xl p-1">Price: ${item.price}</p>
          
          <p className="bg-orange-950 rounded-xl p-1">Rating: {item.rating}/5</p>
          </span>
          
        </div>
      ))}
    </div>
  )
}



export const ShowBooks: React.FC<Props> = ({ books }) => {
  
  const hasBooks = books?.length > 0
  

  return ( hasBooks ? (  <ListOfBooks books={books} /> ) : (<p>There isnt books</p> ) )





}


