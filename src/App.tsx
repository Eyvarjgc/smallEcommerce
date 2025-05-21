import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Layout } from './pages/Layout'
import { ShowBooks } from './components/Books'
import { useEffect } from 'react'
import { useAppContext } from './hooks/useAppContext'

function App() {
  const {getData, books}  = useAppContext()
  
    useEffect( ()  => {
      getData('http://localhost:5000/books/all')
    
  }, [])
  


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} >

        <Route index element={<ShowBooks books={books} />} />

        <Route path='/:query' element={<ShowBooks  books={books} />} />

        </Route>
      </Routes>
    </Router>
  )
}

export default App
