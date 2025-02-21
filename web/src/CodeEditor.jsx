import React, { useState, useRef } from "react";
import { Editor } from "@monaco-editor/react";
import { Box, Typography, Button } from "@mui/material";

export default function CodeEditor() {

  const editorRef = useRef(null);
  const [output, setOutput] = useState("");

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    if (editorRef.current) {
      const code = editorRef.current.getValue();
      console.log(code);
      
      let consoleOutput = "";

      // Captura console.log()
      const originalConsoleLog = console.log;
      console.log = (...args) => {
        consoleOutput += args.join(" ") + "\n";
      };

      try {
        new Function(`"use strict"; ${code}`)(); // Ejecuta el código
        setOutput(consoleOutput || "Código ejecutado sin salida");
      } catch (error) {
        setOutput(`Error: ${error.message}`);
      } finally {
        console.log = originalConsoleLog; // Restaura console.log()
      }
    }
  }

    return (
      <Box style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Box style={{ height: "300px", border: "1px solid #ddd" }}>
          <Editor
            height="90%"
            defaultLanguage="javascript"
            defaultValue="// some comment"
            onMount={handleEditorDidMount}
          />
          <Box>
          <Button onClick={showValue} style={{ padding: "8px", fontSize: "16px", cursor: "pointer" }}>
            Ejecutar Código
          </Button>
            <Typography>Salida:{output}</Typography>
          </Box>
        </Box>
      </Box>
    );
  }
