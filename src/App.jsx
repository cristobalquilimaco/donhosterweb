import { Routes, useNavigate, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import IconsSkill from './Shared/IconsSkill';
import ErrorMessage from './Components/ErrorMessage';
import Error403 from './Pages/Error403';
import Error500 from './Pages/Error500';
import Error503 from './Pages/Error503';
import Home from './Pages/Home';
import DedicatedSever from './Pages/DedicatedSever';
import About from './Pages/About';
import VpsKvm from './Pages/VpsKvm';
import Cloud from './Pages/Cloud';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermOfServices from './Pages/TermOfServices';
import DataCenter from './Pages/DataCenter';
import Hosting from './Pages/Hosting';

function NotFound() {
  return <ErrorMessage />;
}

function App() {
  const navigate = useNavigate();

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
        navigate('/error-404');
        break;
    }
  };

  const handleAPIError = (statusCode) => {
    handleError(statusCode);
  };

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dedicated-servers' element={<DedicatedSever />} />
        <Route path='/about-donhoster' element={<About />} />
        <Route path='/vps' element={<VpsKvm />} />
        <Route path='/cloud' element={<Cloud />} />
        <Route path='/hosting' element={<Hosting />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-of-services' element={<TermOfServices />} />
        <Route path='/data-center' element={<DataCenter />} />
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
