import './App.css'
import { NavBar } from './components/NavBar.tsx'
import { Search } from './components/Search.tsx'

import { useEffect } from 'react'
import { useApiBooks } from './components/hooks/useApiBooks.tsx'

import { type TitleProp } from './types.ts'

function App() {
  const {data,error,loading, getData} = useApiBooks()


  useEffect(() => {
    getData('http://localhost:5000/books/all')

  }, [])
  
  const handleSearch = (title: string) => {
    getData(`http://localhost:5000/books?search=${title.trim()}`)
    console.log(data);
    
  }

  return (
      
    <div className='flex  bg-black gap-8 m-auto '>

      <nav className='bg-black border-2 border-orange-700 p-2 w-1/12 rounded-4xl my-auto h-[99vh] m-4'>
        <NavBar />
      </nav>
      <section className='bg-black  border-amber-600 w-full rounded-4xl h-[99vh] m-4'>
      <Search handleSearch={handleSearch}/>
      
      </section>
    </div>
  )
}

export default App
