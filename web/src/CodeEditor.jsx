import React, { useState, useRef } from "react";
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

  const iframeRef = useRef(null);

  const runCode = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      const document = iframe.contentDocument;
      document.open();
      document.write(`
        <html>
        <body>
          <script>
            try {
              ${code}
            } catch (error) {
              console.error(error);
            }
          <\/script>
        </body>
        </html>
      `);
      document.close();
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{ height: "300px", border: "1px solid #ddd" }}>
        <Editor
          height="100%"
          defaultLanguage="javascript"
          theme="vs-light"
          value={code}
          onChange={(newValue) => setCode(newValue)}
          options={{ fontSize: 16, minimap: { enabled: false }, automaticLayout: true }}
        />
      </div>
      <button onClick={runCode} style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}>
        Ejecutar Código
      </button>
      <iframe ref={iframeRef} title="output" style={{ width: "100%", height: "200px", border: "1px solid black" }} />
    </div>
  );
};

export default CodeEditor;