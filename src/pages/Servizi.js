import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  // Importa Link da React Router
import './Servizi.css';

const Servizi = () => {
  const [servizi, setServizi] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/servizi')  // Assicurati che l'endpoint API sia corretto
      .then((response) => response.json())
      .then((data) => setServizi(data))
      .catch((error) => console.error('Errore nel recupero dei servizi:', error));
  }, []);

  return (
    <div className="servizi-page">
      <section id="servizi" className="servizi-section">
        <h2>I Nostri Servizi</h2>
        <p className="section-description">
          Offriamo una vasta gamma di trattamenti per il viso, il corpo e il benessere generale. Scegli quello che fa per te!
        </p>

        <div className="servizi-list">
          {servizi.map((servizio) => (
            <div className="servizio-card" key={servizio.id}>
              <img src={servizio.immagine_url} alt={servizio.titolo} />
              <h3>{servizio.titolo}</h3>
              <p>{servizio.descrizione}</p>
              <div className="servizio-buttons">
                <button className="btn prenota">Prenota</button>
                <button className="btn scopri">Scopri di più</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sezione CTA per rimandare alla pagina Contatti */}
      <section className="cta-section">
        <h2>Hai bisogno di maggiori informazioni?</h2>
        <p>Contattaci per qualsiasi domanda o per prenotare il tuo servizio!</p>
        <Link to="/contatti" className="btn-primary">Contattaci Ora</Link>
      </section>

      {/* Pulsante per login Host */}
      <Link to="/host-login">
        <button className="btn-host">Sei Host? Accedi</button>
      </Link>
    </div>
  );
};

export default Servizi;
