import { Routes, useNavigate, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import IconsSkill from './Shared/IconsSkill';
import { lazy, Suspense } from 'react';
import ErrorMessage from './Components/ErrorMessage';
import Error403 from './Pages/Error403';
import Error500 from './Pages/Error500';
import Error503 from './Pages/Error503';

// Usamos lazy loading solo para el componente Home
const LazyHome = lazy(() => import('./Pages/Home'));
const DedicatedSever = lazy(() => import('./Pages/DedicatedSever'));
const About = lazy(() => import('./Pages/About'));
const VpsKvm = lazy(() => import('./Pages/VpsKvm'));
const Cloud = lazy(() => import('./Pages/Cloud'));
const PrivacyPolicy = lazy(() => import('./Pages/PrivacyPolicy'));
const TermOfServices = lazy(() => import('./Pages/TermOfServices'));
const DataCenter = lazy(() => import('./Pages/DataCenter'));
const Hosting = lazy(() => import('./Pages/Hosting'));

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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<LazyHome />} />
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
