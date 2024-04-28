import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import Homepage from './pages/Homepage';
import Login from './pages/Login';
import SignUp from './pages/signup';
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
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Homepage /><ScrollToTopButton/></>} />
        <Route path="/login" element={<><Login/><ScrollToTopButton/></>} />
        <Route path='/signup' element={<><SignUp/><ScrollToTopButton/></>} />
      </Routes>
    </Router>
  );
}
