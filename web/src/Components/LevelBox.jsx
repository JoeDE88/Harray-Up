import { Box, Paper, Typography } from "@mui/material";
import { useLevelContext } from "../Contexts/LevelContext";
import LevelDropdown from "./LevelDropDown";
import { BuildArray } from './BuildArray';

export default function LevelBox() {
    const { level } = useLevelContext();

    return (
        <Paper elevation={3} sx={{ width: "100%",height:'100%' }}>
                <Box
                    sx={{
                        height:'100%',
                        borderRadius: 1,
                        bgcolor: 'secondary.main',
                        position: 'relative', // Añadido para poder posicionar la caja de abajo
                    }}>

                    <LevelDropdown levels={level}></LevelDropdown>
                    <Box sx={{ padding: 2, color: 'primary.main', fontSize: '1.5rem' }}>
                        <p>{level.introduction}</p>
                        <p>{level.example}</p>
                        <p>{level.instructions}</p>
                    </Box>
                    <Box container='true'
                        sx={{
                            position: 'absolute',
                            bottom: '10px',
                            right: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            bgcolor: 'secondary.main',
                            borderRadius: '10px',
                            padding: '10px'
                        }}
                    >
                        <Typography sx={{ color: 'primary.main', fontSize: '1.5rem', marginBottom: '10px' }}>
                            Expected result
                        </Typography>

                        <BuildArray scale={3} array={JSON.parse(level.goalArray)} />
                    </Box>
                </Box>
        </Paper>
    )
}