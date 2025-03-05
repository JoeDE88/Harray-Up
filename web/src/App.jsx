import './App.css'
import React from "react";
import { Routes,Route} from "react-router"
import { LoginRedirect } from './Componentes/routing/LoginRedirect';
import { GuardedRoutes } from './Componentes/routing/GuardedRoute';
import { routesConfig } from './routes/routesConfig';


function App() {
  return (
    <>
    <Routes>
      <Route path="/login" element={<LoginRedirect/>}/>
      <Route element={<GuardedRoutes/>}>
        {routesConfig.map((route)=>{
          return(
            <Route
            key={route.name}
            path={route.path}
            element={route.component}
            />
          )
        })}
        </Route>
    </Routes>
    </>
  )
}

export default App