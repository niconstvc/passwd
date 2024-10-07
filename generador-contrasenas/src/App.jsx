import React, { useState } from 'react';
import './App.css'; // Importar el archivo CSS para darle estilo

const letras = 'qwertyuiopasdfghjklñzxcvbnm';
const numeros = '0123456789';
const simbolos = '=!"#$%&/()*[]:_;><';

const unir = letras + numeros + simbolos;

function App() {
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const generarContraseña = () => {
    let longitud = 8;
    let contraseña = Array.from({ length: longitud }, () => 
      unir[Math.floor(Math.random() * unir.length)]
    ).join('');
    setPassword(contraseña);
    setCopied(false); // Reseteamos el estado de copiado al generar una nueva contraseña
  };

  const copiarContraseña = () => {
    navigator.clipboard.writeText(password)
      .then(() => setCopied(true)) // Cambiamos el estado cuando la copia es exitosa
      .catch(err => console.error('Error al copiar:', err));
  };

  return (
    <div className="app">
      <h1>Generador de Contraseñas</h1>
      <button onClick={generarContraseña}>Crear Contraseña</button>
      {password && (
        <>
          <p className="password">{password}</p>
          <button className="copy-button" onClick={copiarContraseña}>
            <span className="icon">📋</span> {/* Ícono de copiar */}
          </button>
          {copied && <p style={{ color: 'white' }}>¡Contraseña copiada!</p>} {/* Mostrar mensaje si la contraseña se copió */}
        </>
      )}
    </div>
  );
}

export default App;
