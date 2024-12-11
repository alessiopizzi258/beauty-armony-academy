import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'; // Importa il logo

const Hero = () => {
  return (
    <div style={styles.hero}>
      <div style={styles.textContainer}>
      <img src={logo} alt="Beauty Armony Academy Logo" style={styles.logo} />
        <h1 style={styles.heading}>Benvenuti alla Beauty Armony Academy</h1>
        <p style={styles.subheading}>Scopri il nostro programma di corsi professionali per l'estetica e i trattamenti di bellezza.</p>
        {/* Avvolgi il pulsante con il Link per redirigere alla pagina Corsi */}
        <Link to="/corsi" style={styles.button}>Scopri i Corsi</Link>
      </div>
    </div>
  );
};

const styles = {
  hero: {
    background: 'url("https://www.accademiaelavoro.eu/images/it-it/corso-formazione-professionale/corsi-estetista.jpg") no-repeat center center',
    backgroundSize: 'cover',  // Assicura che l'immagine copra tutto lo spazio
    backgroundAttachment: 'fixed',  // Opzionale: Effetto parallax se vuoi che l'immagine resti fissa
    height: '100vh',  // Imposta l'altezza a 100% della finestra del browser
    width: '100%',  // Imposta la larghezza al 100% dello schermo
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
  },
  logo: {
    width: '180px',
    marginBottom: '20px',
  },
  textContainer: {
    maxWidth: '700px',
    padding: '3rem',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Background scuro per migliorare il contrasto
    borderRadius: '10px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#fff', // Assicurati che il testo sia bianco
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Ombra per migliorare la visibilità
  },
  subheading: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    fontWeight: '300',
    color: '#fff', // Anche il sottotitolo deve essere bianco
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)', // Aggiungi un'ombra per un contrasto migliore
  },
  button: {
    marginTop: '2rem',
    padding: '0.8rem 1.5rem',
    background: 'linear-gradient(45deg, #f8b400, #ff5722)',  // Gradiente arancione
    color: '#fff',
    border: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '5px',
    textDecoration: 'none',  // Rimuove sottolineatura dal link
    transition: 'background 0.3s ease',  // Effetto di transizione sul colore di sfondo
  },
  buttonHover: {
    backgroundColor: '#f05d23',
    transform: 'scale(1.05)',
  },
};

export default Hero;
