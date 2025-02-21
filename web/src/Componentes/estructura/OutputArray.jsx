import { Box } from "@mui/material";
import { BuildArray } from "../Draws";


export default function OutputArray(){

    return (
        <Box sx={{padding:'50px',backgroundColor:'secondary.main',marginTop:'20px',height:'350px'}}>
            <BuildArray initialArray={["banana", "strawberry",["apple","cherry"], "banana", "pineapple"]}></BuildArray>
        </Box>
    )
}