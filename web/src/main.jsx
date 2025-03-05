import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";



import { ThemeProvider } from "@mui/material/styles";
import { theme } from './theme/theme';
import { UserProvider } from './Contexts/UserContext.jsx';
import { LevelProvider } from './Contexts/LevelContext.jsx';
import App from './App.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <UserProvider>
          <LevelProvider>
            <App/>
          </LevelProvider>
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
