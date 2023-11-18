import { Routes, useNavigate, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import DedicatedSever from './Pages/DedicatedSever';
import About from './Pages/About';
import VpsKvm from './Pages/VpsKvm';
import IconsSkill from './Shared/IconsSkill';
import Cloud from './Pages/Cloud';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermOfServices from './Pages/TermOfServices';
import ErrorMessage from './Components/ErrorMessage';
import Error403 from './Pages/Error403';
import Error500 from './Pages/Error500';
import Error503 from './Pages/Error503';


function NotFound() {
  return <ErrorMessage />;
}

function App() {
  const navigate = useNavigate();

  // Lógica de manejo de errores (simulación)
  const handleError = (error) => {
    switch (error) {
      case 404:
        navigate('/error-404');
        break;
      case 500:
        navigate('/error-500');
        break;
      case 503:
        navigate('/error-503');
        break;
      case 403:
        navigate('/error-403');
        break;
      default:
        // Redirigir a página no encontrada para cualquier otro error no manejado
        navigate('/error-404');
        break;
    }
  };

  // Supongamos que esta función se llama en algún momento de tu lógica para manejar errores
  // Por ejemplo, al recibir una respuesta con código de error desde una API
  const handleAPIError = (statusCode) => {
    handleError(statusCode);
  };

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dedicated-server' element={<DedicatedSever />} />
        <Route path='/about' element={<About />} />
        <Route path='/vpskvm' element={<VpsKvm />} />
        <Route path='/cloud' element={<Cloud />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/term-of-services' element={<TermOfServices />} />
        <Route path='/error-403' element={<Error403 />} />
        <Route path='/error-500' element={<Error500 />} />
        <Route path='/error-503' element={<Error503 />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <IconsSkill />
      <Footer />
    </div>
  );
}

export default App;
