import React, { useEffect } from 'react';
import './Notification.css'; // Puoi personalizzare lo stile nel file CSS

const Notification = ({ message, type, onClose }) => {
    useEffect(() => {
        if (message) {
            setTimeout(() => {
                onClose();
            }, 3000); // Nascondi il messaggio dopo 3 secondi
        }
    }, [message, onClose]);

    if (!message) return null;

    return (
        <div className={`notification ${type}`}>
            {message}
        </div>
    );
};

export default Notification;
