import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './GestioneServizi.css';
import Notification from '../components/Notification'; // Importa il componente Notification

const PaginaHost = () => {
  const navigate = useNavigate();
  const isHost = localStorage.getItem('isHost');
  const [servizi, setServizi] = useState([]);
  const [newService, setNewService] = useState({
    titolo: '',
    descrizione: '',
    immagine_url: '',
  });
  const [editService, setEditService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState({
    message: '',
    type: '',
  });

  useEffect(() => {
    if (!isHost) {
      navigate('/host-login');
    }

    const fetchServizi = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/servizi');
        const data = await response.json();
        setServizi(data);
        setLoading(false);
      } catch (error) {
        console.error('Errore nel recupero dei servizi:', error);
        setLoading(false);
      }
    };
    fetchServizi();
  }, [isHost, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newService.titolo || !newService.descrizione || !newService.immagine_url) {
      setNotification({
        message: "Tutti i campi sono obbligatori.",
        type: "error",
      });
      return;
    }
    const response = await fetch('http://localhost:5000/api/servizi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newService),
    });

    if (response.ok) {
      setNotification({
        message: 'Servizio aggiunto con successo',
        type: 'success',
      });
      setNewService({ titolo: '', descrizione: '', immagine_url: '' });
      const updatedServizi = await response.json();
      setServizi([...servizi, updatedServizi]);
    } else {
      setNotification({
        message: 'Errore nell\'aggiunta del servizio',
        type: 'error',
      });
    }
  };

  const handleEdit = (id) => {
    const servizioToEdit = servizi.find(servizio => servizio.id === id);
    setEditService(servizioToEdit);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/servizi/${editService.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editService),
    });

    if (response.ok) {
      setNotification({
        message: 'Servizio aggiornato con successo',
        type: 'success',
      });
      setServizi(servizi.map(servizio => (servizio.id === editService.id ? editService : servizio)));
      setEditService(null);
    } else {
      setNotification({
        message: 'Errore nell\'aggiornamento del servizio',
        type: 'error',
      });
    }
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/api/servizi/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      setNotification({
        message: 'Servizio eliminato con successo',
        type: 'success',
      });
      setServizi(servizi.filter(servizio => servizio.id !== id));
    } else {
      setNotification({
        message: 'Errore nell\'eliminazione del servizio',
        type: 'error',
      });
    }
  };

  return (
    <div className="pagina-host">
      <h1>Gestisci i Servizi</h1>

      {/* Aggiungi il componente Notification */}
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: '', type: '' })}
      />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titolo"
          value={newService.titolo}
          onChange={(e) => setNewService({ ...newService, titolo: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descrizione"
          value={newService.descrizione}
          onChange={(e) => setNewService({ ...newService, descrizione: e.target.value })}
        />
        <input
          type="text"
          placeholder="Immagine URL"
          value={newService.immagine_url}
          onChange={(e) => setNewService({ ...newService, immagine_url: e.target.value })}
        />
        <button type="submit">Aggiungi Servizio</button>
      </form>

      <h2>Servizi Esistenti</h2>
      {loading ? (
        <p>Caricamento in corso...</p>
      ) : (
        <div className="servizi-card-container">
          {servizi.map(servizio => (
            <div className="servizio-card" key={servizio.id}>
              <img src={servizio.immagine_url} alt={servizio.titolo} className="servizio-card-img" />
              <div className="servizio-card-body">
                <h3 className="servizio-card-title">{servizio.titolo}</h3>
                <p className="servizio-card-description">{servizio.descrizione}</p>
              </div>
              <div className="servizio-card-actions">
                <button onClick={() => handleEdit(servizio.id)}>Modifica</button>
                <button onClick={() => handleDelete(servizio.id)}>Elimina</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {editService && (
        <div>
          <h2>Modifica Servizio</h2>
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              placeholder="Titolo"
              value={editService.titolo}
              onChange={(e) => setEditService({ ...editService, titolo: e.target.value })}
            />
            <input
              type="text"
              placeholder="Descrizione"
              value={editService.descrizione}
              onChange={(e) => setEditService({ ...editService, descrizione: e.target.value })}
            />
            <input
              type="text"
              placeholder="Immagine URL"
              value={editService.immagine_url}
              onChange={(e) => setEditService({ ...editService, immagine_url: e.target.value })}
            />
            <button type="submit">Aggiorna Servizio</button>
            <button type="button" onClick={() => setEditService(null)}>Annulla</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PaginaHost;
