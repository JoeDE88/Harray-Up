import { Box } from "@mui/material"
import Navbar from "../Components/estructura/Navbar"
import OutputArray from "../Components/OutputArray"
import Background from "../assets/background.png"
import LevelAndEditor from "../Components/estructura/LevelAndEditor"

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
            <LevelAndEditor></LevelAndEditor>
            <OutputArray></OutputArray>
        </Box>
    )
}