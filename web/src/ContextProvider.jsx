import React from 'react';
import { AppProvider } from './AppContext'; // Importa el contexto que creaste
import App from './App.jsx'; // Importa tu componente principal

const ContextProvider = () => (
  <AppProvider>
    <App />
  </AppProvider>
);

export default ContextProvider;