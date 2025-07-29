// src/main.tsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n'; 

// 1. Buscamos el elemento 'root' y lo guardamos en una constante.
const rootElement = document.getElementById('root');

// 2. CAMBIO CLAVE: Nos aseguramos de que el elemento NO es nulo antes de continuar.
//    Esto satisface la regla de TypeScript y hace el código más seguro.
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  // Opcional: Mostramos un error si el elemento 'root' no se encuentra en el HTML.
  console.error("Failed to find the root element. Make sure your index.html has a div with id='root'.");
}