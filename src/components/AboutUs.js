import React from 'react';

const AboutUs = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Chi Siamo</h2>
      <p style={styles.text}>
  La Beauty Armony Academy, fondata da Roberta Caruso a Melito di Porto Salvo, è un centro estetico esclusivo che offre trattamenti di bellezza personalizzati per ogni esigenza. Roberta, con anni di esperienza nel settore, non solo accoglie i clienti con trattamenti professionali, ma insegna anche corsi pratici in estetica, trasferendo la sua passione e competenza alle nuove generazioni di estetiste. Unendo il servizio ai clienti e la formazione, Beauty Armony rappresenta un punto di riferimento per la bellezza e la crescita professionale.
</p>

      <div style={styles.imgContainer}>
        <div style={styles.imgItem}>
          <img src="https://scontent.fbri2-1.fna.fbcdn.net/v/t39.30808-6/397332260_717278010422029_8213665828707032461_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sw1gkJ8Mj8EQ7kNvgF1E3Kx&_nc_zt=23&_nc_ht=scontent.fbri2-1.fna&_nc_gid=AnggZZs6apZx8ELqA2IWyop&oh=00_AYDQ53JkhdfFUqxHHTxy7bK4V4COgFHimhfG2oHOqIWSqQ&oe=675D0657" alt="Aula di formazione" style={styles.img} />
          <p style={styles.imgDescription}>Aula di formazione</p>
        </div>
        <div style={styles.imgItem}>
          <img src="https://scontent.fbri2-1.fna.fbcdn.net/v/t39.30808-6/316535098_506437981506034_186322896851486171_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DTLEvbmuGSsQ7kNvgGYqoAX&_nc_zt=23&_nc_ht=scontent.fbri2-1.fna&_nc_gid=A4iaVpiDoWWe_mbOKTyAJCJ&oh=00_AYDGKl_NxQsSA1uG3Ieu3RvKV4zDplGNtJNjRFl_2qB7tg&oe=675CF2D8" alt="Corso pratico" style={styles.img} />
          <p style={styles.imgDescription}>Corso pratico</p>
        </div>
        <div style={styles.imgItem}>
          <img src="https://scontent.fbri2-1.fna.fbcdn.net/v/t39.30808-6/439438134_823328713150291_6407591134954436987_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=e6VhduHDALwQ7kNvgH6t6m3&_nc_zt=23&_nc_ht=scontent.fbri2-1.fna&_nc_gid=AgaNIT2RK4XfCjSo5iAshoE&oh=00_AYColyoeiPRPYrZM5bCMpvVvSKofAhu3sRGTy2tK2yfNng&oe=675D1912" alt="Trattamenti di bellezza" style={styles.img} />
          <p style={styles.imgDescription}>Trattamenti di bellezza</p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '4rem 2rem',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.2rem',
    maxWidth: '800px',
    margin: '0 auto',
    marginBottom: '2rem',
    color: '#555',
  },
  imgContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    justifyItems: 'center',
    marginTop: '40px',
  },
  imgItem: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  img: {
    width: '100%',
    height: 'auto',
    transition: 'transform 0.3s ease',
  },
  imgDescription: {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    right: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    padding: '5px',
    textAlign: 'center',
    fontSize: '1rem',
    borderRadius: '5px',
  },
};

export default AboutUs;
