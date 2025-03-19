import { Box, Paper, Typography } from "@mui/material";
import CodeEditor from './CodeEditor';

export default function EditorBox() {

    return (
        <Paper elevation={3} sx={{ width: "100%" }}>
            <Box sx={{ borderRadius: 1, bgcolor: 'secondary.main', height:'550px' }}>
                <CodeEditor></CodeEditor>
            </Box>
        </Paper>
    )
}