import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Notification from '../components/Notification'; // Importa il componente Notification
import './GestioneCorsi.css';

function GestioneCorsi() {
    const [corsi, setCorsi] = useState([]);
    const [newCourse, setNewCourse] = useState({
        titolo: '',
        descrizione: '',
        immagine_url: '',
    });
    const [editCourse, setEditCourse] = useState(null);
    const [notification, setNotification] = useState(null);

    // Recupera tutti i corsi
    useEffect(() => {
        axios.get('http://localhost:5000/api/corsi')
            .then((response) => {
                setCorsi(response.data);
            })
            .catch((err) => {
                console.error('Errore nel recupero dei corsi', err);
            });
    }, []);

    // Aggiungi un nuovo corso
    const handleAddCourse = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/corsi', newCourse);
            setCorsi([...corsi, { ...newCourse, id: response.data.id }]);
            setNewCourse({ titolo: '', descrizione: '', immagine_url: '' });
            setNotification({ message: 'Corso aggiunto con successo', type: 'success' });
        } catch (err) {
            console.error('Errore nell\'aggiunta del corso', err);
            setNotification({ message: 'Errore nell\'aggiunta del corso', type: 'error' });
        }
    };

    // Modifica un corso
    const handleEditCourse = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/corsi/${editCourse.id}`, editCourse);
            setCorsi(corsi.map(corso => corso.id === editCourse.id ? editCourse : corso));
            setEditCourse(null);
            setNotification({ message: 'Corso modificato con successo', type: 'success' });
        } catch (err) {
            console.error('Errore nella modifica del corso', err);
            setNotification({ message: 'Errore nella modifica del corso', type: 'error' });
        }
    };

    // Elimina un corso
    const handleDeleteCourse = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/corsi/${id}`);
            setCorsi(corsi.filter(corso => corso.id !== id));
            setNotification({ message: 'Corso eliminato con successo', type: 'success' });
        } catch (err) {
            console.error('Errore nell\'eliminazione del corso', err);
            setNotification({ message: 'Errore nell\'eliminazione del corso', type: 'error' });
        }
    };

    return (
        <div className="gestione-corsi">
            <h1>Gestione Corsi</h1>

            {/* Mostra il messaggio di notifica */}
            <Notification message={notification?.message} type={notification?.type} onClose={() => setNotification(null)} />

            {/* Form per aggiungere un nuovo corso */}
            <form onSubmit={handleAddCourse}>
                <input
                    type="text"
                    placeholder="Titolo"
                    value={newCourse.titolo}
                    onChange={(e) => setNewCourse({ ...newCourse, titolo: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Descrizione"
                    value={newCourse.descrizione}
                    onChange={(e) => setNewCourse({ ...newCourse, descrizione: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Immagine URL"
                    value={newCourse.immagine_url}
                    onChange={(e) => setNewCourse({ ...newCourse, immagine_url: e.target.value })}
                />
                <button type="submit">Aggiungi Corso</button>
            </form>

            {/* Lista dei corsi */}
            <h2>Elenco dei Corsi</h2>
            <div className="corsi-container">
                {corsi.map(corso => (
                    <div className="card" key={corso.id}>
                        <img src={corso.immagine_url} alt={corso.titolo} className="card-image" />
                        <div className="card-content">
                            <h3>{corso.titolo}</h3>
                            <p>{corso.descrizione}</p>
                            <button onClick={() => setEditCourse(corso)}>Modifica</button>
                            <button onClick={() => handleDeleteCourse(corso.id)}>Elimina</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Form per modificare un corso */}
            {editCourse && (
                <div>
                    <h2>Modifica Corso</h2>
                    <form onSubmit={handleEditCourse}>
                        <input
                            type="text"
                            placeholder="Titolo"
                            value={editCourse.titolo}
                            onChange={(e) => setEditCourse({ ...editCourse, titolo: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Descrizione"
                            value={editCourse.descrizione}
                            onChange={(e) => setEditCourse({ ...editCourse, descrizione: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Immagine URL"
                            value={editCourse.immagine_url}
                            onChange={(e) => setEditCourse({ ...editCourse, immagine_url: e.target.value })}
                        />
                        <button type="submit">Aggiorna Corso</button>
                        <button type="button" onClick={() => setEditCourse(null)}>Annulla</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default GestioneCorsi;
