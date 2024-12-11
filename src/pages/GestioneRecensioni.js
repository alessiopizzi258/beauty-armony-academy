import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GestioneRecensioni.css';
import Notification from '../components/Notification'; // Importiamo il componente Notification

function GestioneRecensioni() {
  const isHost = localStorage.getItem('isHost');

  // Se l'utente non è autenticato, lo reindirizziamo alla pagina di login
  if (!isHost) {
    window.location.href = '/host-login'; // Reindirizza alla pagina di login
  }

  const [recensioniInAttesa, setRecensioniInAttesa] = useState([]);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState({
    message: '',
    type: '',
  });

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/recensioni-pending')
      .then((response) => setRecensioniInAttesa(response.data))
      .catch((error) => setError('Errore nel recupero delle recensioni in attesa'));
  }, []);

  const gestisciRecensione = (id, stato) => {
    const approvato = stato === 'approva';

    // Invia la richiesta per approvare o rifiutare
    axios
      .post('http://localhost:5000/api/gestisci-recensione', { id, approvato })
      .then((response) => {
        if (approvato) {
          // Notifica di approvazione
          setNotification({
            message: 'Recensione approvata con successo',
            type: 'success',
          });
        } else {
          // Notifica di rifiuto
          setNotification({
            message: 'Recensione rifiutata con successo',
            type: 'success',
          });
        }
        // Rimuoviamo la recensione dalla lista in attesa
        setRecensioniInAttesa((prevRecensioni) =>
          prevRecensioni.filter((rec) => rec.id !== id)
        );
      })
      .catch((error) => {
        console.error('Errore nella gestione della recensione', error);
        setNotification({
          message: 'Errore nel processare la recensione',
          type: 'error',
        });
      });
  };

  return (
    <div className="gestione-recensioni">
      <h2>Gestione Recensioni</h2>
      {error && <div className="error">{error}</div>}

      {/* Aggiungi il componente Notification */}
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: '', type: '' })}
      />

      <ul>
        <h3>Recensioni in Attesa:</h3>
        {recensioniInAttesa.length === 0 ? (
          <p>Nessuna recensione in attesa</p>
        ) : (
          recensioniInAttesa.map((recensione) => (
            <li key={recensione.id}>
              <p><strong>Nome Utente:</strong> {recensione.nome_cliente}</p>
              <p><strong>Recensione:</strong> {recensione.recensione}</p>
              <p><strong>Rating:</strong> {recensione.valutazione}</p>
              <button onClick={() => gestisciRecensione(recensione.id, 'approva')}>Approva</button>
              <button onClick={() => gestisciRecensione(recensione.id, 'rifiuta')}>Rifiuta</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default GestioneRecensioni;
