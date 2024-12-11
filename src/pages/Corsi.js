import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Corsi.css';

function Corsi() {
    const [corsi, setCorsi] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/corsi')
            .then(response => {
                setCorsi(response.data);
            })
            .catch(err => {
                setError('Errore nel recupero dei corsi');
                console.error(err);
            });
    }, []);

    return (
        <div className="corsi-page">
            <h2>I nostri corsi</h2>
            {error && <p className="error-message">{error}</p>}
            <div className="corsi-container">
                {corsi.map(corso => (
                    <div className="card" key={corso.id}>
                        <img src={corso.immagine_url} alt={corso.titolo} className="card-image" />
                        <div className="card-content">
                            <h3>{corso.titolo}</h3>
                            <p>{corso.descrizione}</p>
                            <button onClick={() => window.location.href = "/contatti"}>Iscriviti Ora</button>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/host-login">
        <button className="btn-host">Sei Host? Accedi</button>
      </Link>
        </div>
    );
}

export default Corsi;
