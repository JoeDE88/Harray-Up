import './App.css'
import Navbar from './Componentes/Navbar'
import LevelBox from './Componentes/LevelBox'
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
        <BuildArray initialArray={["banana","strawberry","banana","pineapple"]}></BuildArray>
      </div>
    </>
  )
}

export default App