import { type bookList } from "../types"

interface Props { 
  books: bookList
}

const ListOfBooks: React.FC<Props> = ({ books }) => { 
  return (
    <div className="flex flex-row justify-center gap-8 flex-wrap "> 
      {books.map((item) => (
        <div className="bg-black rounded-3xl p-2 overflow-hidden text-sm" >
          <img src={item.thumbnail} alt=""  className="w-[150px] h-[250px]  rounded-3xl "/>
          <p className="text-left font-semibold font-mono mt-2  ">{item.title}</p>
          <p className="ont-semibold font-mono ">{item.category}</p>

          <span className="flex flex-row gap-2 justify-center mt-2">
            <p>Price: {item.price}</p>
          
          <p>Rating: {item.rating}/5</p>
          </span>
          
        </div>
      ))}
    </div>
  )
}



export const ShowBooks: React.FC<Props> = ({ books }) => {
  
  const hasBooks = books?.length > 0
  

  return ( 
    <div className="text-white bg-orange-900 rounded-4xl p-4 ">
      {hasBooks ? (  <ListOfBooks books={books} /> ) : (<p>There isnt books</p> ) } 



    </div>
  )


}


