import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('cliente'); // Seleziona ruolo cliente o admin

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        email,
        password,
        role,
      });
      console.log('Registrazione riuscita:', response);
      // Redirect dopo la registrazione
    } catch (error) {
      console.error('Errore nella registrazione:', error);
    }
  };

  return (
    <div className="register-container">
      <h2>Registrati</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="cliente">Cliente</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Registrati</button>
      </form>
    </div>
  );
}

export default Register;
