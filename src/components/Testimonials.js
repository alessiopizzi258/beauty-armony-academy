import React from 'react';

const Testimonials = () => {
  return (
    <section style={styles.section}>
      <div style={styles.textContainer}>
        <h2 style={styles.heading}>Cosa dicono di noi?</h2>
        <div style={styles.testimonials}>
          <div style={styles.testimonial}>
            <p style={styles.text}>"Roberta è una esperta e preparata professionista, dispensa sempre ottimi consigli! Consiglio il suo centro estetico per la vasta gamma dei trattamenti offerti e per la bravura con cui vengono effettuati! Onestà, professionalità e simpatia la contraddistinguono"</p>
            <p style={styles.author}>- Emanuela I.</p>
          </div>
          <div style={styles.testimonial}>
            <p style={styles.text}>"Centro completo di tutti i servizi di estetica; la proprietaria, Roberta, è meravigliosa e super competente in tutto! Tratta le clienti con professionalità e accoglienza, resto sempre soddisfatta dopo ogni appuntamento. Consigliatissimo!"</p>
            <p style={styles.author}>- Francesca M.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    background: 'url("https://www.formart.it/flex/AppData/Redational/corsi/u/n/i/D.5ae225fb9c99ceb47e34/OB_sfondo_estetica.jpg") no-repeat center center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',  // Default color for text is black
    textAlign: 'center',
    padding: '0 20px',
  },
  textContainer: {
    maxWidth: '1200px',
    padding: '3rem',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Overlay scuro per migliorare il contrasto
    borderRadius: '10px',
    textAlign: 'center',
    marginTop: '50px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.6)', // Ombra aggiuntiva per separare dalla sezione di sfondo
  },
  heading: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Ombra per migliorare il contrasto del titolo
    marginBottom: '2rem',
  },
  text: {
    fontStyle: 'italic',
    fontSize: '1.1rem',
    marginBottom: '1rem',
    lineHeight: '1.6',  // Maggiore altezza della linea per migliorare la leggibilità
    color: '#000',  // Colore del testo cambiato a nero
  },
  author: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
    marginTop: '1rem',
    color: '#000',  // Colore dell'autore cambiato a nero
  },
  testimonials: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '2rem',
    marginTop: '2rem',
    flexWrap: 'wrap',
  },
  testimonial: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    width: '48%', // Le recensioni occupano il 48% della larghezza
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '1rem',
    textAlign: 'left',
  },
};

export default Testimonials;
