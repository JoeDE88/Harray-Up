import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";

const CodeEditor = () => {
  const [code, setCode] = useState(`
// Declaración de un array
let numeros = [1, 2, 3, 4, 5];

// Agregar un elemento al final
numeros.push(6);

// Eliminar el último elemento
numeros.pop();

// Recorrer el array e imprimir cada número
numeros.forEach(num => console.log(num));
`);

  return (
    <div style={{ height: "500px", border: "1px solid #ddd" }}>
      <Editor
        height="100%"
        language="javascript" // Puedes cambiarlo a otro lenguaje
        theme="vs-light" // vs-light o cualquier otro tema
        value={code}
        onChange={(newValue) => setCode(newValue)}
        options={{
          fontSize: 16,
          minimap: { enabled: false },
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
