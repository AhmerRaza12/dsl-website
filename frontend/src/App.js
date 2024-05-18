import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import About from './pages/About';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import SignUp from './pages/signup';
import Navbar from './components/Navbar';
import Services from './pages/Services';
import Cakesh from './pages/Cakesh';
import Feelings from './pages/Feelings';
import Portal from './pages/admin/Portal';
const ScrollToTopButton = () => {
  const [showButton, setShowButton] = React.useState(false);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setShowButton(scrollPosition > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={`fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-md transition-opacity ${
        showButton ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faChevronUp} size='lg'/>
    </button>
  );
};

export default function App() {
  const [loggedInName, setLoggedInName] = React.useState('');

  const handleLogin = (data) => {
    
    console.log(data)
    setLoggedInName(data);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <Navbar loggedInName={loggedInName} />
          <Homepage />
          <ScrollToTopButton />
        </>} />
        <Route path="/login" element={<><Login handleLogin={handleLogin} /><ScrollToTopButton /></>} />
        <Route path= '/about' element={<><About /><ScrollToTopButton /></>} />
        <Route path='/services' element={<><Services /><ScrollToTopButton /></>} />
        <Route path='/cakesh' element={<><Cakesh /><ScrollToTopButton /></>} />
        <Route path='/feelings' element={<><Feelings /><ScrollToTopButton /></>} />
        <Route path='/signup' element={<><SignUp /><ScrollToTopButton /></>} />
        <Route path='/admin/table' element={<><Portal /> <ScrollToTopButton/></>}       />
      </Routes>
    </Router>
  );
}
