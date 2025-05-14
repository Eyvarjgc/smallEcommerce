import './App.css'
import { NavBar } from './components/NavBar.tsx'
import { Search } from './components/Search.tsx'

import { useEffect, useRef, useState } from 'react'
import { useApiBooks } from './hooks/useApiBooks.tsx'
import { ShowBooks } from './components/Books.tsx'


function App() {

  const {books, setBooks, error, loading, getData} = useApiBooks()
  const searchInput = useRef<HTMLInputElement>(null)
  const [errorInput,  setErrorInput] = useState<string>()

  useEffect( ()  => {
    getData('http://localhost:5000/books/all')
    
  }, [])
  
  const handleSearch = async (title: string) => {
    const inputValue = searchInput.current?.value.trim()

    if(!inputValue){
      setErrorInput('Please write a book name')
      setTimeout(() => {
        setErrorInput('')
      }, 2000);
      getData(`http://localhost:5000/books/all`)
      return
    }

    getData(`http://localhost:5000/books?search=${title}`)
  }




  return (
      
    <div className='flex  bg-black gap-8 m-auto '>

      <nav className='bg-black border-2 border-orange-700 p-2 w-1/12 rounded-4xl my-auto h-[99vh] m-4'>
        <NavBar />
      </nav>
      <section className='bg-black  border-amber-600 w-full rounded-4xl h-[99vh] m-4'>
      <Search handleSearch={handleSearch} searchRef={searchInput}/>

        {loading == true ? <p className='text-white'>Loading...</p>: ''}
        {error && <p className='text-white'>{error}</p>}



      {errorInput && <p className='text-white'>{errorInput}</p>}
        <div className='mt-4'>
        <ShowBooks books={books} />

        </div>
      </section>
    </div>
  )
}

export default App
