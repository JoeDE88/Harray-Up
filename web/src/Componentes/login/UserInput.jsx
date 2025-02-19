import { useTheme } from "@emotion/react";
import { TextField } from "@mui/material";

export default function UserInput(){
    
    return (
        <>
        <TextField sx={{"& .MuiInputBase-input": { color: "primary.main" }}} id="standard-basic" label="Email" variant="standard" />
        <TextField id="standard-basic" label="Password" type="password" variant="standard" />
        </>

    )
}