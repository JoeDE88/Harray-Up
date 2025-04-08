import React from "react";
import { Box } from "@mui/material";
import { theme } from "../theme/theme.js";
import LoginRegisterTabs from "../Components/estructura/Login-RegisterTabs.jsx";
import { AppBar } from "@mui/material";
import Lemon from '../assets/icons/lemon.png'
import Background from "../assets/background.png"
import { Typography } from "@mui/material";

export default function LoginPage() {
  return (
    <Box style={{
      backgroundImage: `url(${Background})`,
      backgroundSize: "cover",
      backgroundPosition: 'center',
      height: "100vh",
      opacity: "0.5",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Box sx={{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        borderRadius: 1,
        boxShadow: 3,
        textAlign: "center",
        width: "40%",
        maxWidth: 500,
        minHeight: "auto",
        height: "auto",
      }}>
        <AppBar position="static" color="primary" sx={{ borderRadius: 1, display: "flex", flexDirection: "row", justifyContent: "center" }}>
          {/* <Button component={RouterLink} to="/"> */}

          <Box component="img" sx={{ height: 60, width: 50, imageRendering: "pixelated" }} alt="Your logo." src={Lemon} />
          {/* </Button> */}
          <Typography color="secondary" variant="h3" > Harray Up!</Typography>
        </AppBar>
        <LoginRegisterTabs />
      </Box>
    </Box>
  );
};