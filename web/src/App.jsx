import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import CodeEditor from "./CodeEditor";

function App() {

  return (
    <>
      <div>
        <h1>Prueba tu código aquí</h1>
        <CodeEditor />
      </div>
    </>
  )
}

export default App
