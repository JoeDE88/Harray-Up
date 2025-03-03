import { createContext, useState, useContext } from 'react';

// Creamos el contexto
const LevelContext = createContext();

// Creamos el provider
export const LevelProvider = ({ children }) => {
  const [fruits, setFruits] = useState(["banana"]); // Puedes cambiar 'home' por el valor inicial
  const [level, setLevel] = useState({
    "id": 1,
    "introduction": "If you see this level is because database is not accesible, anyway, I give you an example  for change this Array",
    "example": "output = [1,2,3,4,5,6,7]",
    "instructions": "asign the value ['strawberry','pear','pineapple'] to the output",
    "staticCode":
      `
function changeArray(array) {
// Write your code below this line
output = []
                  
// Write your code above this line
return output
}

let fruits = ["banana", "banana"]
changeArray(fruits)
`,
    "goalArray": '["strawberry", "pear", "pineapple"]'




  })




  return (
    <LevelContext.Provider value={{ fruits, setFruits, level, setLevel }}>
      {children}
    </LevelContext.Provider>
  );
};

// Función para consumir el contexto fácilmente
export const useLevelContext = () => useContext(LevelContext);