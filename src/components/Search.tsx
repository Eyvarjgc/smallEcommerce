import {   useState } from "react"



interface Props{
  handleSearch: ( title : string) => void
  searchRef: React.RefObject<HTMLInputElement> 
}

export const Search : React.FC<Props> = ({handleSearch, searchRef}) => {
  const [valueSearched, setValueSearched] = useState<string>('')

   const handleKeyEvent = (evt : React.KeyboardEvent<HTMLInputElement>) => {
    if(evt.key === 'Enter'){
      handleSearch(valueSearched)
      
    }
    
   }


  return(
    <input type="text"
    placeholder="Write a book title"
    className=" placeholder:text-white border-2 border-orange-600 rounded-3xl text-white p-4
     text-xl font-extralight font-mono  h-16 sticky top-0 z-50 bg-black w-[95%]  "
    onKeyDown={handleKeyEvent}
    onChange={(evt) => setValueSearched(evt.target.value)}
    ref={searchRef}
    />

  )
}