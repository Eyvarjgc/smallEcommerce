import {   useState } from "react"

interface Props{
  handleSearch: ( title : string) => void
}

export const Search : React.FC<Props> = ({handleSearch}) => {
  const [valueSearched, setValueSearched] = useState<string>('')

   const handleKeyEvent = (evt : React.KeyboardEvent<HTMLInputElement>) => {
    if(evt.key === 'Enter'){
      handleSearch(valueSearched)
      
    }
    
   }


  return(
    <input type="text"
    placeholder="Write a book title"
    className=" placeholder:text-white border-2 border-orange-600 rounded-3xl text-white p-4 w-1/2 text-xl font-extralight font-mono"
    onKeyDown={handleKeyEvent}
    onChange={(evt) => setValueSearched(evt.target.value)}
    value={valueSearched}
    />

  )
}