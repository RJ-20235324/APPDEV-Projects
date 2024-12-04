import { Link, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Products from './Components/Products'
import ArtisanKeyboards from './Components/Artisan-Keyboards'
import Reviews from './Components/Reviews'
import CompanyProfile from './Components/Company-Profile'
import Developers from './Components/Developers'
import Support from './Components/Support'


function App() {
  return (
    <>
      
      <Navbar/>
      {/* Routes for the App. */}
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/ArtisanKeyboards' element={<ArtisanKeyboards />} />
        <Route path='/Reviews' element={<Reviews />} />
        <Route path='/CompanyProfile' element={<CompanyProfile />} />
        <Route path='/Developer' element={<Developers />} />
        <Route path='/Support' element={<Support />} />
      </Routes>

      
    </>
  )
}

export default App
