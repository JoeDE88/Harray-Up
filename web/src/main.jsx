import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ThemeProvider, createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#4B3D44"
    },
    secondary: {
      main: "#D2C9A5",
      contrastText: "#4B3D44"
    },
    tertiary: {
      main: "#79444A",
      contrastText: "#D2C9A5"
    }
  },
  typography: {
    fontFamily: [
      'Jersey, '
    ]
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
