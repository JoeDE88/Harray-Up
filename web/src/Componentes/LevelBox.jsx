import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function LevelBox() {
    return (
        <>
            <Box
                sx={{
                    width: 1,
                    height: 400,
                    borderRadius: 1,
                    bgcolor: 'secondary.main',
                    marginTop: '10px'
                }}
            >
                <Button color="tertiary" variant="contained" style={{ fontSize: '20px',marginLeft: '15px', marginTop: '15px' }}>Level 1</Button>
            </Box>
        </>
    );
}