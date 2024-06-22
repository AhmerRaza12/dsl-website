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

import Contact from './pages/Contact';
import Footer from './components/Footer';
import BookingList from './pages/admin/BookingList';
import RetailBooking from './pages/admin/RetailBooking';
import TrackEntry from './pages/admin/TrackEntry';
import UpdateBooking from './pages/admin/UpdateBooking';
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
      className={`fixed bottom-4 right-4 bg-lime-500 text-white p-3 rounded-md transition-opacity ${
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
        <Route path='/contact' element={<><Contact/><ScrollToTopButton /></>} />
        
        <Route path='/admin/retail-booking' element={<> <Navbar/> <RetailBooking/> <ScrollToTopButton/></>} />
        <Route path='/admin/booking-list' element={<><Navbar/><BookingList/> <ScrollToTopButton/></>} />
        <Route path='/admin/track-entry' element={<><Navbar/><TrackEntry/> <ScrollToTopButton/></>} />
        <Route path='/admin/update-booking' element={<><Navbar/><UpdateBooking/> <ScrollToTopButton/></>} />
      </Routes>
      <Footer />
    </Router>
  );
}
