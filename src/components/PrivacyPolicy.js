import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Privacy Policy</h1>

      <div style={styles.content}>
        <h2 style={styles.subtitle}>Introduzione</h2>
        <p style={styles.paragraph}>
          Benvenuto nella Privacy Policy di Beauty Armony Academy. Questa informativa spiega come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali.
        </p>

        <h2 style={styles.subtitle}>1. Informazioni che raccogliamo</h2>
        <p style={styles.paragraph}>
          Raccogliamo informazioni personali quando interagisci con il nostro sito, come il tuo nome, indirizzo email, numero di telefono, e altri dettagli necessari per l'accesso ai nostri servizi.
        </p>

        <h2 style={styles.subtitle}>2. Utilizzo delle informazioni</h2>
        <p style={styles.paragraph}>
          Utilizziamo le informazioni raccolte per migliorare i nostri servizi, inviarti comunicazioni relative ai nostri corsi e eventi, e per ottemperare a obblighi legali.
        </p>

        <h2 style={styles.subtitle}>3. Condivisione delle informazioni</h2>
        <p style={styles.paragraph}>
          Non condividiamo le tue informazioni personali con terze parti, ad eccezione di quelle necessarie per il funzionamento del nostro servizio (come i partner di pagamento).
        </p>

        <h2 style={styles.subtitle}>4. Sicurezza dei dati</h2>
        <p style={styles.paragraph}>
          Proteggiamo i tuoi dati personali utilizzando misure di sicurezza avanzate, tra cui la crittografia e sistemi di protezione dei dati.
        </p>

        <h2 style={styles.subtitle}>5. Diritti dell'utente</h2>
        <p style={styles.paragraph}>
          Hai il diritto di accedere, correggere o eliminare le tue informazioni personali in qualsiasi momento. Puoi anche opporti al trattamento dei tuoi dati.
        </p>

        <h2 style={styles.subtitle}>6. Modifiche alla Privacy Policy</h2>
        <p style={styles.paragraph}>
          Ci riserviamo il diritto di modificare questa Privacy Policy. Eventuali modifiche saranno pubblicate su questa pagina con l'indicazione della data di aggiornamento.
        </p>

        <h2 style={styles.subtitle}>7. Contatti</h2>
        <p style={styles.paragraph}>
          Se hai domande riguardanti questa Privacy Policy, puoi contattarci tramite il nostro sito web o all'indirizzo email: supporto@beautyarmony.it
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

export default PrivacyPolicy;
