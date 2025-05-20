import { type Book } from "../types"

interface Props extends Book { 
  
}

export const BookSearched : React.FC<Props>  =  (book) => {

  return (

    <div className="text-white">
      {book.title}
      
    </div>


  )


}