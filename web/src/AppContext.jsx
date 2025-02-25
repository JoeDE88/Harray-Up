import { createContext, useState, useContext } from 'react';

// Creamos el contexto
const AppContext = createContext();

// Creamos el provider
export const AppProvider = ({ children }) => {
  const [fruits, setFruits] = useState(["banana"]); // Puedes cambiar 'home' por el valor inicial

  return (
    <AppContext.Provider value={{ fruits, setFruits }}>
      {children}
    </AppContext.Provider>
  );
};

// Función para consumir el contexto fácilmente
export const useAppContext = () => useContext(AppContext);