import React from 'react';
import { Link } from 'react-router-dom';

const CorsiPreview = () => {
  return (
    <section style={styles.section}>
      <h2>I Nostri Corsi</h2>
      <p style={styles.text}>Scopri i nostri corsi professionali di estetica, ideali per chi vuole entrare nel mondo della bellezza.</p>
      <div style={styles.courses}>
        <div style={styles.courseCard}>
          <h3>Corso Base di Estetica</h3>
          <p>Impara le tecniche fondamentali per una carriera di successo nel mondo dell'estetica.</p>
          <Link to="/corsi" style={styles.link}>Scopri di più</Link>
        </div>
        <div style={styles.courseCard}>
          <h3>Corso Avanzato Make-Up</h3>
          <p>Per chi desidera perfezionare la propria arte del trucco e imparare nuove tecniche professionali.</p>
          <Link to="/corsi" style={styles.link}>Scopri di più</Link>
        </div>
        <div style={styles.courseCard}>
          <h3>Corso di Ricostruzione Unghie</h3>
          <p>Scopri come ricostruire unghie perfette e impeccabili con le tecniche più avanzate.</p>
          <Link to="/corsi" style={styles.link}>Scopri di più</Link>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '4rem 2rem',
    textAlign: 'center',
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  courses: {
    display: 'flex',
    justifyContent: 'space-around',
    gap: '1rem',
  },
  courseCard: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '1.5rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '30%',
  },
  link: {
    color: '#f8b400',
    textDecoration: 'none',
    fontWeight: 'bold',
    display: 'inline-block',
    marginTop: '1rem',
  },
};

export default CorsiPreview;
