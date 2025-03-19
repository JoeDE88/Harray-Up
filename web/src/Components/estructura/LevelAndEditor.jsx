import { Box } from "@mui/material";
import EditorBox from "../EditorBox";
import LevelBox from "../LevelBox";

export default function LevelAndEditor() {

    return (
        <>
            <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
                <Box sx={{ width: "60%",height:'550px',backgroundColor:'grey' }}>
                    <LevelBox />
                </Box>
                <Box sx={{ width: "40%" }}>
                    <EditorBox />
                </Box>
            </Box>
        </>
    )
}