import { useTheme } from "@emotion/react";
import { TextField } from "@mui/material";

export default function UserInput(){
    
    return (
        <>
        <TextField sx={{ "& .MuiInputLabel-root": { 
                    fontSize: "1.3rem"}, "& .MuiInputBase-input": { color: "primary.main" }}} id="standard-basic" label="Email" variant="standard" />
        <TextField sx={{ "& .MuiInputLabel-root": { 
                    fontSize: "1.3rem"}}} id="standard-basic-uwu" label="Password" type="password" variant="standard" />
        </>

    )
}