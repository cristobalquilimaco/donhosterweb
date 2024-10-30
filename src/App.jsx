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
import DataCenter from './Pages/DataCenter';
import Hosting from './Pages/Hosting';
import { lazy, Suspense } from 'react';

const LazyLoading = lazy(() => import('./Components/loading/LoadingPage'));

function NotFound() {
  return <ErrorMessage />;
}

function App() {
  const navigate = useNavigate();

  // Lógica de manejo de errores
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
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
      <IconsSkill />
      <Footer />
    </div>
  );
}

export default App;
