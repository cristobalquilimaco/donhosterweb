import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Navbar from './Shared/Navbar'
import Footer from './Shared/Footer'
import DedicatedSever from './Pages/DedicatedSever'
import About from './Pages/About'
import VpsKvm from './Pages/VpsKvm'
import IconsSkill from './Shared/IconsSkill'
import Cloud from './Pages/Cloud'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import TermOfServices from './Pages/TermOfServices'

function App() {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dedicatedserver' element={<DedicatedSever />} />
          <Route path='/about' element={<About />} />
          <Route path='/vpskvm' element={<VpsKvm />} />
          <Route path='/cloud' element={<Cloud />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/term-of-services' element={<TermOfServices />} />
        </Routes>
        <IconsSkill/>
      <Footer/>
    </div>

  )
}

export default App
