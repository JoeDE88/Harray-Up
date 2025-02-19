import './App.css'
import Navbar from './Componentes/estructura/Navbar'
import LevelBox from './Componentes/estructura/LevelandResultBox'
import { BuildArray } from './Componentes/Draws'
import React from "react";

function App() {

  return (
    <>
      <div>
        <Navbar></Navbar>
        <LevelBox></LevelBox>

<BuildArray initialArray={["banana", "strawberry", "banana", "pineapple"]}></BuildArray>

      </div>
    </>
  )
}

export default App