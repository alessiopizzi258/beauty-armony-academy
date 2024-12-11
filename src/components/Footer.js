import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Usa Link per il routing interno

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.socialIcons}>
        <a 
          href="https://www.instagram.com/beautyarmony/" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={styles.iconLink}
        >
          <FaInstagram size={30} color="#fff" />
        </a>
        <a 
          href="https://www.tiktok.com/@beautyarmony" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={styles.iconLink}
        >
          <FaTiktok size={30} color="#fff" />
        </a>
      </div>
      <div style={styles.footerText}>
        <p>&copy; 2024 Beauty Armony Academy | All Rights Reserved</p>
        <p>
          <Link to="/privacy-policy" style={styles.legalLinks}>
            Privacy Policy
          </Link> | 
          <Link to="/terms-and-conditions" style={styles.legalLinks}>
            Terms & Conditions
          </Link>
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: 'linear-gradient(135deg, #f8b400, #f05d23)', // Gradiente dal giallo all'arancione
    color: '#fff',
    textAlign: 'center',
    padding: '30px 0',
    position: 'relative',
    width: '100%',
    bottom: 0,
    display: 'flex',
    flexDirection: 'column', // Disporre gli elementi in colonna
    alignItems: 'center', // Centrare il contenuto
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center', // Centra le icone orizzontalmente
    gap: '20px', // Distanza tra le icone
    marginTop: '20px', // Aggiungi spazio tra il testo e le icone
  },
  iconLink: {
    textDecoration: 'none',
    transition: 'transform 0.2s, filter 0.3s',
  },
  footerText: {
    fontSize: '16px', // Dimensione del font per il testo del footer
  },
  legalLinks: {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
    transition: 'color 0.3s', // Transizione per l'effetto hover
  },
  legalLinksHover: {
    color: '#f8b400', // Colore arancione quando il link è in hover
  },
  iconHover: {
    transform: 'scale(1.2)',
    filter: 'brightness(1.2)', // Aggiunta luminosità all'hover
  }
};

export default Footer;
