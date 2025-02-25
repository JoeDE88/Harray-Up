import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import ContextProvider from './ContextProvider.jsx';



import { ThemeProvider } from "@mui/material/styles";
import { theme } from './theme/theme';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ContextProvider></ContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
