import { Box, Paper, Typography } from "@mui/material";
import CodeEditor from './CodeEditor';

export default function EditorBox() {

    return (
        <Paper elevation={3} sx={{ width: "100%" }}>
            <Box sx={{ borderRadius: 1, bgcolor: 'secondary.main', height:'500px' }}>
                <Typography sx={{ fontSize: '26px', paddingTop: '4px', marginLeft: '10px' }}>Prueba tu código aquí.</Typography>
                <CodeEditor></CodeEditor>
            </Box>
        </Paper>
    )
}