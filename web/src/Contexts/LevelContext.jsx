import { createContext, useState, useContext } from 'react';
import { levelList } from '../levels';

// Creamos el contexto
const LevelContext = createContext();

// Creamos el provider
export const LevelProvider = ({ children }) => {
  const [fruits, setFruits] = useState(["banana"]); // Puedes cambiar 'home' por el valor inicial
  const [level, setLevel] = useState(levelList[0]
 )

  return (
    <LevelContext.Provider value={{ fruits, setFruits, level, setLevel }}>
      {children}
    </LevelContext.Provider>
  );
};

// Función para consumir el contexto fácilmente
export const useLevelContext = () => useContext(LevelContext);