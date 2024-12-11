import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Corsi from './pages/Corsi';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Servizi from './pages/Servizi';
import Contatti from './pages/Contatti';
import Recensioni from './pages/Recensioni';
import GestioneRecensioni from './pages/GestioneRecensioni';
import GestioneServizi from './pages/GestioneServizi';
import GestioneCorsi from './pages/GestioneCorsi';
import HostLogin from './pages/HostLogin';
import PrivacyPolicy from './components/PrivacyPolicy'; 
import TermsAndConditions from './components/TermsAndConditions';
import SponsorLocali from './pages/SponsorLocali'; 
import './App.css';

function App() {
  const [isHost, setIsHost] = useState(localStorage.getItem('isHost') === 'true');

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'password') {
      setIsHost(true);
      localStorage.setItem('isHost', 'true');
    }
  };

  const handleLogout = () => {
    setIsHost(false);
    localStorage.removeItem('isHost');
  };

  return (
    <Router basename="/my-react-app"> {/* Aggiungi questa riga */}
      <Navbar isHost={isHost} onLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/" element={<><Hero /><AboutUs /><Testimonials /></>} />
          <Route path="/corsi" element={<Corsi />} />
          <Route path="/servizi" element={<Servizi />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/recensioni" element={<Recensioni />} />
          <Route path="/GestioneRecensioni" element={<GestioneRecensioni />} />
          <Route path="/GestioneServizi" element={<GestioneServizi />} />
          <Route path="/GestioneCorsi" element={<GestioneCorsi />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/Sponsor" element={<SponsorLocali />} />
          <Route path="/host-login" element={<HostLogin onLogin={handleLogin} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
