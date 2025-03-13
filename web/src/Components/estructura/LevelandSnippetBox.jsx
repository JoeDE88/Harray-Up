import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import { useLevelContext } from '../../Contexts/LevelContext';
import { BuildArray } from '../BuildArray';
import CodeEditor from '../../CodeEditor';
import LevelDropdown from './LevelDropDown';

export default function LevelandSnippetBox() {
    const { level } = useLevelContext();

    return (
        <>
            <Grid container spacing={2}>
                <Grid size={6}>
                    <Box
                        sx={{
                            height: 500,
                            borderRadius: 1,
                            bgcolor: 'secondary.main',
                            marginTop: '10px',
                            position: 'relative', // Añadido para poder posicionar la caja de abajo
                        }}
                    >
                        <LevelDropdown levels={level} ></LevelDropdown>

                        <Box sx={{ padding: 2, color: 'primary.main', fontSize: '30px' }}>
                            <p>{level.introduction}</p>
                            <p>{level.example}</p>
                            <p>{level.instructions}</p>
                        </Box>

                        {/* Contenedor posicionado en la esquina inferior derecha de la mitad izquierda */}
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: '10px',
                                right: '10px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                bgcolor: 'secondary.main',
                                borderRadius: '10px',
                                padding: '10px',
                            }}
                        >
                            <Typography sx={{ color: 'primary.main', fontSize: '30px', marginBottom: '10px' }}>
                                Expected result
                            </Typography>

                            <BuildArray scale={3} array={JSON.parse(level.goalArray)} />
                        </Box>
                    </Box>
                </Grid>
                <Grid size={6}>
                    <Box sx={{ height: 500, borderRadius: 1, bgcolor: 'secondary.main' }}>
                        <Typography sx={{ fontSize: '26px', paddingTop: '5px', marginTop: '10px', marginLeft: '10px' }}>Prueba tu código aquí.</Typography>
                        <CodeEditor></CodeEditor>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}