import { Box } from "@mui/material"
import LevelandSnippetBox from "../Componentes/estructura/LevelandSnippetBox"
import Navbar from "../Componentes/estructura/Navbar"
import OutputArray from "../Componentes/estructura/OutputArray"
import Background from "../assets/background.png"

export default function Homepage() {
    return (
        <Box

            sx={{
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
                    zIndex: -1,
                }
            }}>
            <Navbar></Navbar>
            <LevelandSnippetBox></LevelandSnippetBox>
            <OutputArray></OutputArray>
        </Box>
    )
}