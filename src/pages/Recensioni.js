import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import './Recensioni.css';

function Recensioni() {
  const [recensioni, setRecensioni] = useState([]); 
  const [recensione, setRecensione] = useState('');
  const [nome_cliente, setNomeUtente] = useState('');
  const [valutazione, setRating] = useState(1); 
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    // Update URL to match the backend route
    axios.get('http://localhost:5000/api/recensioni-approvate')
      .then(response => setRecensioni(response.data))
      .catch(error => {
        console.error('Errore nel recupero delle recensioni approvate:', error);
        setError('Errore nel recupero delle recensioni approvate');
      });
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();  
    const nuovaRecensione = {
      nome_cliente: nome_cliente,
      recensione: recensione,
      valutazione: valutazione
    };

    // Ensure the endpoint is correct here as well
    axios.post('http://localhost:5000/api/aggiungi-recensione', nuovaRecensione)
  .then(response => {
    setRecensioni([...recensioni, response.data]);
    setNomeUtente('');
    setRecensione('');
    setRating(1);
    setSuccess('Recensione aggiunta con successo!');
    setError(null);
  })
  .catch(error => {
    console.error('Errore nell\'invio della recensione', error);
    setError('Errore nell\'invio della recensione');
  });

  };

  return (
    <div className="recensioni-page">
      <h2>Recensioni</h2>

      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}

      <form onSubmit={handleSubmit} className="form-recensione">
        <input
          type="text"
          placeholder="Il tuo nome"
          value={nome_cliente}
          onChange={(e) => setNomeUtente(e.target.value)}
          required
        />
        <textarea
          placeholder="Scrivi una recensione"
          value={recensione}
          onChange={(e) => setRecensione(e.target.value)}
          required
        />
        <select value={valutazione} onChange={(e) => setRating(Number(e.target.value))}>
          <option value={1}>⭐</option>
          <option value={2}>⭐⭐</option>
          <option value={3}>⭐⭐⭐</option>
          <option value={4}>⭐⭐⭐⭐</option>
          <option value={5}>⭐⭐⭐⭐⭐</option>
        </select>
        <button type="submit">Invia Recensione</button>
      </form>

      <h3>Le recensioni dei nostri clienti:</h3>
<ul className="recensioni-approvate">
  {recensioni.length === 0 ? (
    <p>Nessuna recensione</p>
  ) : (
    recensioni.map((recensione) => (
      <li key={recensione.id} className="card">
        <div className="card-header">
          {recensione.nome_cliente}
        </div>
        <div className="card-content">
          <p>{recensione.recensione}</p>
          <p><strong>Valutazione:</strong> {recensione.valutazione} ⭐</p>
        </div>
      </li>
    ))
  )}
</ul>
  {/* Pulsante per login Host */}
  <Link to="/host-login">
        <button className="btn-host">Sei Host? Accedi</button>
      </Link>
    </div>
  );
}

export default Recensioni;
