import { Link, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'

function App() {
  return (
    <>
      
      <Navbar/>
      {/* Routes for the App. */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

      
    </>
  )
}

export default App
