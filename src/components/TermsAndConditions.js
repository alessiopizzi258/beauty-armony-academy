import React from 'react';

const TermsAndConditions = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Termini e Condizioni</h1>

      <div style={styles.content}>
        <h2 style={styles.subtitle}>Introduzione</h2>
        <p style={styles.paragraph}>
          Benvenuto su Beauty Armony Academy. Prima di utilizzare il nostro servizio, ti preghiamo di leggere attentamente i seguenti Termini e Condizioni.
        </p>

        <h2 style={styles.subtitle}>1. Accettazione dei Termini</h2>
        <p style={styles.paragraph}>
          Utilizzando il nostro sito e i nostri servizi, accetti di essere vincolato dai seguenti Termini e Condizioni. Se non accetti questi termini, ti invitiamo a non utilizzare il nostro sito.
        </p>

        <h2 style={styles.subtitle}>2. Modifiche ai Termini</h2>
        <p style={styles.paragraph}>
          Ci riserviamo il diritto di modificare questi Termini e Condizioni in qualsiasi momento. Eventuali modifiche saranno comunicate su questa pagina.
        </p>

        <h2 style={styles.subtitle}>3. Utilizzo del Servizio</h2>
        <p style={styles.paragraph}>
          Accetti di utilizzare il nostro servizio solo per scopi leciti e in conformità con le leggi locali, nazionali e internazionali applicabili.
        </p>

        <h2 style={styles.subtitle}>4. Proprietà Intellettuale</h2>
        <p style={styles.paragraph}>
          Tutti i contenuti presenti sul nostro sito, inclusi testi, immagini, marchi e loghi, sono di proprietà esclusiva di Beauty Armony Academy e sono protetti dalle leggi sulla proprietà intellettuale.
        </p>

        <h2 style={styles.subtitle}>5. Limitazioni di Responsabilità</h2>
        <p style={styles.paragraph}>
          Beauty Armony Academy non sarà responsabile per danni diretti o indiretti derivanti dall'uso del nostro sito o dei nostri servizi.
        </p>

        <h2 style={styles.subtitle}>6. Legge Applicabile</h2>
        <p style={styles.paragraph}>
          Questi Termini e Condizioni sono regolati dalla legge italiana. In caso di controversie, il foro competente sarà quello di [Inserisci città].
        </p>

        <h2 style={styles.subtitle}>7. Contatti</h2>
        <p style={styles.paragraph}>
          Per qualsiasi domanda riguardante questi Termini e Condizioni, puoi contattarci tramite il nostro sito web o all'indirizzo email: supporto@beautyarmony.it
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '2.5rem',
    color: '#f05d23',
  },
  content: {
    fontSize: '1rem',
    lineHeight: '1.6',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginTop: '20px',
    color: '#f05d23',
  },
  paragraph: {
    marginBottom: '15px',
    color: '#555',
  },
};

export default TermsAndConditions;
