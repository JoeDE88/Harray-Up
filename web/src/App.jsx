import './App.css'
import Navbar from './Componentes/estructura/Navbar'
import LevelBox from './Componentes/estructura/LevelandSnippetBox'
import React from "react";
import OutputArray from './Componentes/estructura/OutputArray';

function App() {

  return (
    <>
      <div>
        <Navbar></Navbar>
        <LevelBox></LevelBox>
        <OutputArray></OutputArray>


      </div>
    </>
  )
}

export default App