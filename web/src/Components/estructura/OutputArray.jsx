import { Box } from "@mui/material";
import { BuildArray } from "../BuildArray";
import { useLevelContext } from "../../Contexts/LevelContext";
import {Typography} from "@mui/material";

export default function OutputArray(){
const { fruits } = useLevelContext(); // Accedemos a la variable global
    return (
<Box
    sx={{
        padding: '50px',
        backgroundColor: 'secondary.main',
        marginTop: '20px',
        height: '190px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }}
>
    {/* Etiqueta centrada encima de BuildArray */}
    <Typography sx={{ color: 'primary.main', fontSize: '40px', marginBottom: '10px' }}>
        Your result
    </Typography>

    {/* BuildArray centrado */}
    <BuildArray scale={4} array={fruits} />
</Box>
    )
}