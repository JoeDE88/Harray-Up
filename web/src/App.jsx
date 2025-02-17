import './App.css'
import Navbar from './Componentes/estructura/Navbar'
import LevelBox from './Componentes/estructura/LevelBox'

import React from "react";
import CodeEditor from "./CodeEditor";

function App() {

  return (
    <>
      <div>
        <Navbar></Navbar>
        <LevelBox></LevelBox>
        <h1>Prueba tu código aquí</h1>
        <CodeEditor />
      </div>
    </>
  )
}

export default App