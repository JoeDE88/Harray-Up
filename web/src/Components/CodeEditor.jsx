import { useState, useRef, useContext, useEffect } from 'react';
import { Editor } from '@monaco-editor/react';
import { Box, Typography } from '@mui/material';
import { useLevelContext } from '../Contexts/LevelContext';
import { levelList } from '../levels';
import BotonGenerico from './BotonGenerico';

function CodeEditor() {
  const { setFruits, setLevel, level } = useLevelContext(); // Obtenemos setFruits del contexto

  const [buttonIsVisible, setButtonIsVisible] = useState(true);

  const [code, setCode] = useState(level.staticCode);
  const [message, setMessage] = useState(''); // Estado para manejar el mensaje
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(0)

  const editorRef = useRef(null);

  function handleEditorWillMount(monaco) {
    // Configuraciones previas si las necesitas
  }
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
    const model = editor.getModel();

  }

  function extractStaticLines(Lines, start, end) {
    const staticLines = Lines.filter((_, index) => {
      return index < start || index > end;
    });

    return staticLines;
  }


  useEffect(() => {
    setCode(level.staticCode)
    if (level == levelList[4]) {
      setButtonIsVisible(false)
    } else { setButtonIsVisible(true) }
  }, [level])


  useEffect(() => {

    const newLines = code.split('\n');
    const newStartIndex = newLines.findIndex(line => line.includes('// Write your code below this line'));
    const newEndIndex = newLines.findIndex(line => line.includes('// Write your code above this line'));
    setStartIndex(newStartIndex)
    setEndIndex(newEndIndex)

  }, [code]);


  const checkCodeModification = (startIndex, endIndex) => {
    if (startIndex === -1 || endIndex === -1) {
      console.warn("No se encontraron los comentarios delimitadores.");
      return false;
    }

    const newLines = code.split('\n');
    const initialLines = level.staticCode.split('\n');

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
      ;
    }

    try {
      let output;
      const wrappedCode = `
        ${code}
        
      `;
      eval(wrappedCode); // Execute user code

      if (Array.isArray(output)) {
        setFruits(output); // Update global state if output is an array

        if (JSON.stringify(output) === (level.goalArray)) {
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
    setCode(level.staticCode);
    setMessage(''); // Limpiamos el mensaje al resetear el código
  };

  const nextLevel = () => {
    let index = levelList.indexOf(level);
    if (index !== -1 && index < levelList.length - 1) {
      setLevel(levelList[index + 1]);
    }
  };

  return (
    <Box>
      <Box sx={{ height: '500px' }}>
        <Typography sx={{ fontSize: '26px', paddingTop: '4px', marginLeft: '10px' }}>Prueba tu código aquí.</Typography>
        <Editor
          height="80%"
          theme="vs-dark"
          value={code}
          options={{
            fontSize: "20px"
          }}
          language="javascript"
          beforeMount={handleEditorWillMount}  // Aquí
          onMount={handleEditorDidMount}      // Aquí
          onChange={(value) => setCode(value)} // Mantener el estado del código
        />
        <Box sx={{ display: 'flex', alignItems: 'center', height: '21.5%' }}>
          <div id='botones'>
            <BotonGenerico texto={"Reset"} handleClick={handleReset} sx={{ '&:hover': { backgroundColor: '#d32f2f' } }} />
            <BotonGenerico texto={"Run"} handleClick={handleRun} sx={{ '&:hover': { backgroundColor: '#303f9f' } }} />
            {buttonIsVisible &&
              <BotonGenerico texto={"Next"} handleClick={nextLevel} sx={{ '&:hover': { backgroundColor: '#303f9f' } }} />
            }
          </div>
          {/* Mostrar el mensaje a la derecha de los botones */}
          {message && (
            <Typography
              sx={{
                marginLeft: 2,
                fontSize: '25px',
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
    </Box>
  );
}

export default CodeEditor;
