import { Box, Grid2 } from "@mui/material";
import EditorBox from "../EditorBox";
import LevelBox from "../LevelBox";

export default function LevelAndEditor() {

    return (
        <>
            <Grid2 container spacing={1}>
                <Grid2 size={{xs:6, md:8}}>
                    <LevelBox />
                </Grid2>
                <Grid2 size={{xs:6, md:4}}>
                    <EditorBox />
                </Grid2>
            </Grid2>
        </>
    )
}