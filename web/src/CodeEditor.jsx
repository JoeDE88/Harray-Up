import { useState, useRef } from 'react'; 
import { Editor } from '@monaco-editor/react'; 
import { Button, Box } from '@mui/material'; 

function CodeEditor() {
  const initialCode = `
function changeArray(array) {
  // a partir de aquí el usuario puede modificar
  output = ""
  



  // a partir de aquí no
  return output
}
let fruits = ["banana", "banana"]
changeArray(fruits)
`;

  const [code, setCode] = useState(initialCode); // Guardamos el código actual en el estado
  const editorRef = useRef(null); // Usamos un ref para acceder al editor

  // Función para verificar si las líneas restringidas fueron modificadas
  const checkCodeModification = (newCode) => {
    const initialLines = initialCode.split('\n');
    const newLines = newCode.split('\n');

    // Comparamos las líneas fuera de la función, que son las restringidas
    for (let i = 0; i < 6; i++) {
      if (initialLines[i] !== newLines[i]) {
        return true; // Significa que el código en una línea restringida ha sido modificado
      }
    }
    return false; // Las líneas restringidas no han sido modificadas
  };

  // Función para ejecutar el código
  const handleRun = () => {
    if (checkCodeModification(code)) {
      alert("No puedes modificar las líneas fuera de la función.");
      return; // Evita que se ejecute el código si se ha modificado lo que no debía
    }

    try {
      // Intentamos ejecutar el código
      new Function(code)(); // Usamos `new Function` para ejecutar el código dinámicamente
      alert("El código se ejecutó correctamente.");
    } catch (error) {
      // Si hay un error de sintaxis o ejecución, mostramos el error
      alert(`Error en el código: ${error.message}`);
    }
  };

  const handleReset = () => {
    setCode(initialCode); // Resetear el código al inicial
  };

  return (
    <Box sx={{ textAlign: 'center' }}> {/* Centramos todo el contenido */}
      {/* Editor de código */}
      <Editor
        height="400px" // Hacemos el editor más pequeño
        theme="vs-dark" // Fondo oscuro para todo el editor
        value={code}
        language="javascript"
        options={{
          readOnly: false, // Permitimos que se pueda editar
          contextmenu: true,
          scrollBeyondLastLine: false,
          minimap: { enabled: false },
          wordWrap: 'on',
          fontSize: 20, // Aumentamos el tamaño de la fuente
        }}
        onChange={(value) => setCode(value)} // Actualizamos el código cuando el usuario lo modifica
        editorDidMount={(editor) => {
          editorRef.current = editor;
        }}
      />

      {/* Contenedor de los botones */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 2 }}>
        <Button 
          variant="contained" 
          onClick={handleRun}
          color="tertiary"
          sx={{
            margin:'0px 0px',
            fontSize: '16px',
            padding: '0px 0px',
            '&:hover': {
              backgroundColor: '#303f9f',
            },
          }}
        >
          Run
        </Button>
        <Button 
          color="tertiary"
          variant="contained" 
          onClick={handleReset}
          sx={{
            margin:'0px 0px',
            fontSize: '16px',
            padding: '0px 0px',
            '&:hover': {
              backgroundColor: '#d32f2f',
            },
          }}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
}

export default CodeEditor;
