import './App.css'
import Navbar from './Componentes/estructura/Navbar'
import LevelBox from './Componentes/estructura/LevelBox'
import {BuildArray} from  './Componentes/Draws'
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
        <BuildArray initialArray={[["strawberry","cherry"],["banana",["strawberry","watermelon","pear"],"banana"],"pineapple"]}></BuildArray>
      </div>
    </>
  )
}

export default App