import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Navbar from './Shared/Navbar'
import Footer from './Shared/Footer'
import DedicatedSever from './Pages/DedicatedSever'
import VpsKvm from './Pages/VpsKvm'

function App() {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dedicatedserver' element={<DedicatedSever />} />
          <Route path='/vpskvm' element={<VpsKvm />} />
        </Routes>
      <Footer/>
    </div>

  )
}

export default App
