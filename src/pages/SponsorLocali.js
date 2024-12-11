import React from 'react';
import './SponsorLocali.css';

const SponsorLocali = () => {
  const sponsors = [
    {
      nome: 'Caffè e Delizie',
      descrizione: 'Un accogliente caffè con specialità italiane, dolci freschi e ottimo caffè.',
      immagine_url: '/images/sponsor1.jpg',  // Percorso dell'immagine del logo
      sito_web: 'https://www.caffee-delizie.com',
      offerta: 'Sconto del 10% sul primo acquisto con il codice BEA10',
    },
    {
      nome: 'Libreria Nova',
      descrizione: 'Una libreria indipendente che offre una vasta selezione di libri e eventi culturali.',
      immagine_url: '/images/sponsor2.jpg',  // Percorso dell'immagine del logo
      sito_web: 'https://www.librerianova.com',
      offerta: 'Acquista 2 libri e ottieni il terzo gratuito.',
    },
    {
      nome: 'Arte e Creatività',
      descrizione: 'Galleria d\'arte locale che espone opere di artisti emergenti della zona.',
      immagine_url: '/images/sponsor3.jpg',  // Percorso dell'immagine del logo
      sito_web: 'https://www.artecreativita.com',
      offerta: 'Visita la galleria e ricevi un buono sconto per il prossimo acquisto.',
    },
  ];

  return (
    <div className="sponsor-locali-container">
      <h2>I Nostri Sponsor Locali</h2>
      <div className="sponsor-list">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="sponsor-card">
            <img src={sponsor.immagine_url} alt={sponsor.nome} className="sponsor-logo" />
            <div className="sponsor-info">
              <h3>{sponsor.nome}</h3>
              <p>{sponsor.descrizione}</p>
              <a href={sponsor.sito_web} target="_blank" rel="noopener noreferrer" className="sponsor-link">
                Visita il sito
              </a>
              <p className="sponsor-offerta">{sponsor.offerta}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorLocali;
