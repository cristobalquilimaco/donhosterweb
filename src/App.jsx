import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Navbar from './Shared/Navbar'
import Footer from './Shared/Footer'
import DedicatedSever from './Pages/DedicatedSever'
import About from './Pages/About'
import VpsKvm from './Pages/VpsKvm'
import IconsSkill from './Shared/IconsSkill'

function App() {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dedicatedserver' element={<DedicatedSever />} />
          <Route path='/about' element={<About />} />
          <Route path='/vpskvm' element={<VpsKvm />} />
        </Routes>
        <IconsSkill/>
      <Footer/>
    </div>

  )
}

export default App
