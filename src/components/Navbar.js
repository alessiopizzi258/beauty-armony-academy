import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isHost, onLogout }) => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleLogout = () => {
    // Esegui il logout rimuovendo il dato dal localStorage e aggiornando lo stato
    onLogout();
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Beauty Armony Academy</div>
      <div style={styles.menuContainer}>
        <ul style={isMobile ? styles.mobileMenu : styles.menu}>
          <li><Link to="/" style={styles.link}>Home</Link></li>
          <li><Link to="/corsi" style={styles.link}>Corsi</Link></li>
          <li><Link to="/servizi" style={styles.link}>Servizi</Link></li>
          <li><Link to="/contatti" style={styles.link}>Contatti</Link></li>
          <li><Link to="/recensioni" style={styles.link}>Recensioni</Link></li>
          <li><Link to="/Sponsor" style={styles.link}>Sponsor</Link></li>

          {/* Aggiungi il pulsante solo se l'utente è un host */}
          {isHost && (
            <>
              <li style={styles.navItem}>
                <Link to="/GestioneRecensioni" style={styles.link}>Gestione recensioni</Link>
              </li>
              <li style={styles.navItem}>
              <Link to="/GestioneServizi" style={styles.link}>Gestione servizi</Link>
              </li>
              <li style={styles.navItem}>
              <Link to="/GestioneCorsi" style={styles.link}>Gestione corsi</Link>
              </li>
              <li style={styles.navItem}>
                <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
              </li>
            </>
          )}
        </ul>
        <button onClick={toggleMenu} style={styles.mobileMenuButton}>
          {isMobile ? 'X' : '☰'}
        </button>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 3rem',
    background: 'linear-gradient(135deg, #f8b400, #f05d23)',
    color: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderBottom: '3px solid #fff',
  },
  logo: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
    color: '#fff',
  },
  menuContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  menu: {
    listStyle: 'none',
    display: 'flex',
    gap: '2rem',
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    transition: 'color 0.3s, transform 0.2s',
  },
  logoutButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  mobileMenuButton: {
    display: 'none', // Nascondi il pulsante su desktop
    fontSize: '2rem',
    color: '#fff',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  mobileMenu: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    margin: 0,
    padding: '2rem',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Background scuro per il menu mobile
    position: 'absolute',
    top: '4rem', // Posiziona il menu sotto la navbar
    right: 0,
    width: '100%',
    borderTop: '2px solid #fff',
  },
  '@media (max-width: 768px)': {
    mobileMenuButton: {
      display: 'block', // Mostra il pulsante solo su dispositivi mobili
    },
  },
};

export default Navbar;
