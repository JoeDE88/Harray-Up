import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";

const CodeEditor = () => {
  const [code, setCode] = useState(null);

  return (
    <div style={{ height: "300px", border: "1px solid #ddd" }}>
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
