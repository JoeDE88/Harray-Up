import { useState, useRef, useContext,useEffect } from 'react'; 
import { Editor } from '@monaco-editor/react'; 
import { Button, Box, Typography } from '@mui/material'; 
import { useLevelContext } from './Contexts/LevelContext';

function CodeEditor() {
  const { setFruits, level } = useLevelContext(); // Obtenemos setFruits del contexto

  const initialCode = level.staticCode;

  const [code, setCode] = useState(initialCode);
  const [message, setMessage] = useState(''); // Estado para manejar el mensaje
  const [startIndex,setStartIndex]=useState(0)
  const [endIndex,setEndIndex]=useState(0)

  const editorRef = useRef(null);

  function handleEditorWillMount(monaco) {
    // Configuraciones previas si las necesitas
    console.log('Antes de montar el editor:', monaco);
  }
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
    const model = editor.getModel();
    console.log(model)

  }
  
  function extractStaticLines(Lines,start,end){
    const staticLines = Lines.filter((_, index) => {
      return index < start || index > end;
    });

    return staticLines;
}




  
  useEffect(() => {
    
    const newLines = code.split('\n');
     const newStartIndex=newLines.findIndex(line => line.includes('// Write your code below this line'));
     const newEndIndex= newLines.findIndex(line => line.includes('// Write your code above this line'));
    setStartIndex(newStartIndex)
    setEndIndex(newEndIndex)
    
  }, [code]);
  

  const checkCodeModification = (startIndex, endIndex) => {
    if (startIndex === -1 || endIndex === -1) {
      console.warn("No se encontraron los comentarios delimitadores.");
      return false;
    }
  
    const newLines = code.split('\n');
    const initialLines = initialCode.split('\n');
  
    const initialStartIndex = initialLines.findIndex(line => line.includes('// Write your code below this line'));
    const initialEndIndex = initialLines.findIndex(line => line.includes('// Write your code above this line'));
  
    const initialStaticLines = extractStaticLines(initialLines, initialStartIndex, initialEndIndex);
    const currentStaticLines = extractStaticLines(newLines, startIndex, endIndex);
  
  
    return initialStaticLines.length === currentStaticLines.length && 
           initialStaticLines.every((val, index) => val === currentStaticLines[index]);
  };
  

  const handleRun = () => {
    if (!checkCodeModification(startIndex, endIndex)) {
      setMessage("You cannot modify lines outside the marks.");
      return;
    }
  
    try {
      let output;
      const wrappedCode = `
        ${code}
        output = changeArray(fruits);
      `;
      eval(wrappedCode); // Execute user code
  
      if (Array.isArray(output)) {
        setFruits(output); // Update global state if output is an array
        
      
        if (JSON.stringify(output) === JSON.stringify(level.goalArray)) {
          setMessage("Congratulations! You got the correct result.");
        } else {
          setMessage("Keep trying, the array does not match.");
        }
      } else {
        setMessage("Code executed, but 'output' is not an array.");
      }
    } catch (error) {
      setMessage(`Error in the code: ${error.message}`);
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
      beforeMount={handleEditorWillMount}  // Aquí
      onMount={handleEditorDidMount}      // Aquí
      onChange={(value) => setCode(value)} // Mantener el estado del código
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
