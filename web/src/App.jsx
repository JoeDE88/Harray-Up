import './App.css'
import React from "react";
import { Routes,Route} from "react-router"
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import Prueba from './Componentes/estructura/prueba';



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
    </>
  )
}

export default App