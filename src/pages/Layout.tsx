import { NavBar } from '../components/NavBar.tsx'
import { Search } from '../components/Search.tsx'

import { useEffect, useRef, useState } from 'react'

import { useAppContext } from '../hooks/useAppContext.tsx'
import { Outlet } from 'react-router'


export const  Layout : React.FC = () => {
  const {error, loading, getData, books} = useAppContext()
  const searchInput = useRef<HTMLInputElement>(null)
  const [errorInput,  setErrorInput] = useState<string>()


  
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
  <div className='flex  bg-black gap-8 m-auto  flex-row  '>

    <nav className=' border-2 border-orange-700  rounded-4xl
    my-auto m-4 fixed h-[95%] p-8  inset-0 top-0 left-0 w-16 flex flex-col space-y-6 z-50 '>
      <NavBar />
    </nav>r

        
    <section className='  border-amber-600  rounded-4xl m-4 min-h-screen ml-16 relative w-full  ' >
      <Search handleSearch={handleSearch} searchRef={searchInput}/>
        {loading == true ? <p className='text-white'>Loading...</p>: ''}
        {error && <p className='text-white'>{error}</p>}
        {errorInput && <p className='text-white'>{errorInput}</p>}

        <div className=' text-white bg-orange-900 rounded-4xl p-4 min-h-screen mt-4
          w-[95%]'>

        <Outlet />

      </div>
    </section>
  </div>
  )
}


