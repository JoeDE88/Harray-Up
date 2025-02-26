import { useState, useRef, useContext } from 'react'; 
import { Editor } from '@monaco-editor/react'; 
import { Button, Box, Typography } from '@mui/material'; 
import { useLevelContext } from './Contexts/LevelContext';

function CodeEditor() {
  const { setFruits, level } = useLevelContext(); // Obtenemos setFruits del contexto

  const initialCode = level.staticCode;

  const [code, setCode] = useState(initialCode);
  const [message, setMessage] = useState(''); // Estado para manejar el mensaje
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
      setMessage("No puedes modificar las líneas fuera de la función.");
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

        if (JSON.stringify(output) === JSON.stringify(level.goalArray)) {
          setMessage("¡Felicidades! Has conseguido el resultado correcto.");
        } else {
          setMessage("Sigue intentándolo, el array no coincide.");
        }
      } else {
        setMessage("El código se ejecutó, pero 'output' no es un array.");
      }
    } catch (error) {
      setMessage(`Error en el código: ${error.message}`);
    }
  };

  const handleReset = () => {
    setCode(initialCode);
    setMessage(''); // Limpiamos el mensaje al resetear el código
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Editor
        height="300px"
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

      {/* Modificación aquí: los botones alineados a la izquierda */}
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'flex-start', 
          gap: 2, 
          marginTop: 0, 
          marginLeft: 1, 
          marginRight: 1, 
          alignItems: 'center', // Esto centra el contenido en la caja
          height: '61px' // Para asegurarse de que haya suficiente espacio vertical
        }}
      >
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

        {/* Mostrar el mensaje a la derecha de los botones */}
        {message && (
          <Typography 
            sx={{ 
              marginLeft: 2, 
              fontSize: '20px', 
              color: 'tertiary.main', 
              display: 'flex', 
              alignItems: 'center' // Centra verticalmente el mensaje
            }}
          >
            {message}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default CodeEditor;
