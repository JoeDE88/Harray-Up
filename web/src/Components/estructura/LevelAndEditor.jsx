import { Box } from "@mui/material";
import EditorBox from "../EditorBox";
import LevelBox from "../LevelBox";

export default function LevelAndEditor() {

    return (
        <>
            <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
                <Box sx={{ width: "50%", }}>
                    <LevelBox />
                </Box>
                <Box sx={{ width: "50%" }}>
                    <EditorBox />
                </Box>
            </Box>
        </>
    )
}