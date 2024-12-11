import React, { useState } from 'react';
import './Prenotazione.css';

// Lista degli appuntamenti già prenotati (questa sarebbe in un database in una versione reale)
const appuntamentiPrenotati = [
  { id: 1, nome: 'Unghie', inizio: '2024-12-11T15:00:00', fine: '2024-12-11T16:00:00' },
  { id: 2, nome: 'Ceretta', inizio: '2024-12-11T16:00:00', fine: '2024-12-11T16:30:00' },
];

// Servizi disponibili
const servizi = [
  { nome: 'Evento Unghie', durata: 60 }, // durata in minuti
  { nome: 'Evento Ceretta', durata: 30 }, // durata in minuti
];

const Prenotazione = () => {
  const [orarioSelezionato, setOrarioSelezionato] = useState(null);
  const [servizioSelezionato, setServizioSelezionato] = useState(null);
  const [errore, setErrore] = useState('');

  // Funzione per verificare se l'orario è disponibile
  const isOrarioDisponibile = (orarioSelezionato, durata) => {
    const orarioInizio = new Date(orarioSelezionato);
    const orarioFine = new Date(orarioInizio);
    orarioFine.setMinutes(orarioFine.getMinutes() + durata);

    // Verifica se l'orario selezionato si sovrappone con altri appuntamenti
    for (let appuntamento of appuntamentiPrenotati) {
      const appuntamentoInizio = new Date(appuntamento.inizio);
      const appuntamentoFine = new Date(appuntamento.fine);

      // Controlla se c'è sovrapposizione
      if (
        (orarioInizio >= appuntamentoInizio && orarioInizio < appuntamentoFine) ||
        (orarioFine > appuntamentoInizio && orarioFine <= appuntamentoFine) ||
        (orarioInizio <= appuntamentoInizio && orarioFine >= appuntamentoFine)
      ) {
        return false; // Orario non disponibile
      }
    }

    return true; // Orario disponibile
  };

  const handlePrenotazione = (orario, servizio) => {
    if (isOrarioDisponibile(orario, servizio.durata)) {
      // Prenotazione accettata, aggiungi l'appuntamento alla lista
      const orarioInizio = new Date(orario);
      const orarioFine = new Date(orarioInizio);
      orarioFine.setMinutes(orarioFine.getMinutes() + servizio.durata);
      
      appuntamentiPrenotati.push({
        id: appuntamentiPrenotati.length + 1,
        nome: servizio.nome,
        inizio: orarioInizio.toISOString(),
        fine: orarioFine.toISOString(),
      });

      setErrore('');
      alert('Prenotazione effettuata con successo!');
    } else {
      setErrore('L\'orario selezionato non è disponibile. Scegli un altro orario.');
    }
  };

  return (
    <div>
      <h2>Prenotazione Appuntamento</h2>

      <div>
        <h3>Seleziona un Servizio</h3>
        {servizi.map((servizio, index) => (
          <div key={index} onClick={() => setServizioSelezionato(servizio)}>
            <p>{servizio.nome} - {servizio.durata} minuti</p>
          </div>
        ))}
      </div>

      {servizioSelezionato && (
        <div>
          <h3>Seleziona un Orario</h3>
          <button onClick={() => handlePrenotazione('2024-12-11T15:00:00', servizioSelezionato)}>
            Prenota alle 15:00
          </button>
          <button onClick={() => handlePrenotazione('2024-12-11T16:00:00', servizioSelezionato)}>
            Prenota alle 16:00
          </button>
        </div>
      )}

      {errore && <p style={{ color: 'red' }}>{errore}</p>}
    </div>
  );
};

export default Prenotazione;
