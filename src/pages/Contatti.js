import React, { useState } from 'react';
import './Contatti.css';

const Contatti = () => {
  const whatsappNumber = '+393663691564';
  const message = 'Ciao, ho bisogno di maggiori informazioni!';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const [activeTab, setActiveTab] = useState('lunedi');

  const schedules = {
    lunedi: '09:00 - 18:00',
    martedi: '09:00 - 18:00',
    mercoledi: '09:00 - 18:00',
    giovedi: '09:00 - 18:00',
    venerdi: '09:00 - 18:00',
    sabato: '10:00 - 14:00',
    domenica: 'Chiuso',
  };

  return (
    <div className="contatti-page">
      <h1>Contattaci</h1>

      {/* WhatsApp Card */}
      <div className="whatsapp-card" onClick={() => window.open(whatsappLink, "_blank")}>
        <i className="fab fa-whatsapp whatsapp-icon"></i>
        <h3>Hai domande?</h3>
        <p>Scrivici direttamente su WhatsApp!</p>
        <button className="whatsapp-button">Invia Messaggio</button>
      </div>

      {/* Contact Information Section */}
      <div className="contact-info">
        <h2>Informazioni di Contatto</h2>
        <p><i className="fas fa-map-marker-alt"></i> <strong>Indirizzo:</strong> Via Antonio Gramsci n. 36, Melito di Porto Salvo</p>
        <p><i className="fas fa-envelope"></i> <strong>Email:</strong> beautyarmonyacademy@gmail.com</p>
        <p><i className="fas fa-phone"></i> <strong>Telefono:</strong> +39 366 369 1564</p>
      </div>

      {/* Schedule Tabs Section */}
      <div className="schedule-tabs">
        <h2>Orari</h2>
        <div className="tabs">
          {Object.keys(schedules).map((day) => (
            <button
              key={day}
              className={`tab-button ${activeTab === day ? 'active' : ''}`}
              onClick={() => setActiveTab(day)}
            >
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </button>
          ))}
        </div>
        <div className="tab-content">
          <p>
            <strong>Orario del giorno selezionato:</strong> {schedules[activeTab]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contatti;
