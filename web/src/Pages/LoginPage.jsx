import React from "react";
import { Box, Button } from "@mui/material";
import { theme } from "../theme/theme.js";
import LoginRegisterTabs from "../Componentes/estructura/Login-RegisterTabs.jsx";
import { AppBar } from "@mui/material";
import Watermelon from '../assets/icons/watermelon.png'
import Background from "../assets/background.png"
import { Typography } from "@mui/material";

import { NavLink as RouterLink } from 'react-router';



export default function LoginPage() {
  return (<>






    <Box

      sx={{
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "85vh", // Asegura que el contenedor ocupe toda la altura de la pantalla
        width: "95vw", // Asegura que ocupe toda la anchura de la pantalla
        overflow: "hidden", // Evita la aparición de barras de desplazamiento
        paddingTop: "50px", // Espacio para el título fuera de la caja
        margin: 0, // Elimina cualquier margen extra

        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          imageRendering: "pixelated",

          opacity: 0.3, // 🔥 Baja la transparencia SOLO del fondo
          zIndex: -1, // Lo coloca detrás del contenido
        }
      }}
    >
      <Box sx={{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        borderRadius: 3,
        boxShadow: 3,
        textAlign: "center",
        width: "35%",
        maxWidth: 500,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        minHeight: "auto",
        height: "auto",
      }}>
        <AppBar position="static" color="primary" sx={{ borderRadius: 1, display: "flex", flexDirection: "row", justifyContent: "center" }}>
        {/* <Button component={RouterLink} to="/"> */}
          
            <Box component="img" sx={{ height: 60, width: 50, imageRendering: "pixelated" }} alt="Your logo." src={Watermelon} />
          {/* </Button> */}
            <Box sx={{ width: "30%" }}><Typography sx={{ height: 60, width: "90%" }} color="secondary" variant="h3" > Harray </Typography></Box>
            <Box sx={{ width: "20%" }}><Typography sx={{ height: 60, width: "10%", pl: 0, pr: 0 }} color="secondary" variant="h3" > Up!</Typography></Box>
        </AppBar>
      </Box>
      <Box
        sx={{
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText,
          borderRadius: 3,
          boxShadow: 3,

          textAlign: "center",
          width: "35%",
          maxWidth: 500,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          minHeight: "auto",
          height: "auto",
        }}
      >
        <LoginRegisterTabs />
      </Box>
    </Box></>
  );
};