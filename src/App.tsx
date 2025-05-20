import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import { AppProvider } from './hooks/useContext'
import { ShowBooks } from './components/Books'

function App() {
  return (
  <AppProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<ShowBooks />} />

      </Routes>
    </Router>
  </AppProvider>
  )
}

export default App
