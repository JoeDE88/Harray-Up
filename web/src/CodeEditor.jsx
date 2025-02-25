import { useState, useRef, useContext } from 'react'; 
import { Editor } from '@monaco-editor/react'; 
import { Button, Box } from '@mui/material'; 
import { useAppContext } from './AppContext';

function CodeEditor() {
  const { setFruits } = useAppContext(); // Obtenemos setFruits del contexto

  const initialCode = `
function changeArray(array) {
  // a partir de aquí el usuario puede modificar
  output = []
  
  // a partir de aquí no
  return output
}

let fruits = ["banana", "banana"]
changeArray(fruits)
`;

  const [code, setCode] = useState(initialCode);
  const editorRef = useRef(null);

  const checkCodeModification = (newCode) => {
    const initialLines = initialCode.split('\n');
    const newLines = newCode.split('\n');

    for (let i = 6; i < initialLines.length; i++) {
      if (initialLines[i] !== newLines[i]) {
        return true;
      }
    }
    return false;
  };

  const handleRun = () => {
    if (checkCodeModification(code)) {
      alert("No puedes modificar las líneas fuera de la función.");
      return;
    }

    try {
      let output;
      const wrappedCode = `
        ${code}
        output = changeArray(fruits);
      `;
      eval(wrappedCode); // Ejecutamos el código del usuario
      if (Array.isArray(output)) {
        setFruits(output); // Actualizamos el estado global si output es un array
        alert("Código ejecutado correctamente y fruits actualizado.");
      } else {
        alert("El código se ejecutó, pero 'output' no es un array.");
      }
    } catch (error) {
      alert(`Error en el código: ${error.message}`);
    }
  };

  const handleReset = () => {
    setCode(initialCode);
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Editor
        height="400px"
        theme="vs-dark"
        value={code}
        language="javascript"
        options={{
          readOnly: false,
          contextmenu: true,
          scrollBeyondLastLine: false,
          minimap: { enabled: false },
          wordWrap: 'on',
          fontSize: 20,
        }}
        onChange={(value) => setCode(value)}
        editorDidMount={(editor) => {
          editorRef.current = editor;
        }}
      />

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 2 }}>
        <Button 
          variant="contained" 
          onClick={handleRun}
          color="tertiary"
          sx={{
            fontSize: '16px',
            '&:hover': { backgroundColor: '#303f9f' },
          }}
        >
          Run
        </Button>
        <Button 
          color="tertiary"
          variant="contained" 
          onClick={handleReset}
          sx={{
            fontSize: '16px',
            '&:hover': { backgroundColor: '#d32f2f' },
          }}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
}

export default CodeEditor;
