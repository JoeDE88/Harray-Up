import React from 'react';
import { LevelProvider } from './Contexts/LevelContext.jsx'; // Importa el contexto que creaste
import App from './App.jsx'; // Importa tu componente principal

const ContextProvider = () => (
  <LevelProvider>
    <App />
  </LevelProvider>
);

export default ContextProvider;