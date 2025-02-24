import *  as React from 'react';
import { validatePassword } from '../../utils/validations';
import { TextField } from '@mui/material';

export default function PasswordInput(onChange, value) {
    const [isPasswordValid, setIsPasswordValid] = React.useState(false)

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        onChange(newPassword)
        setIsPasswordValid(!validatePassword(newPassword))
    }

    return (
        <TextField
            required
            sx={{
                "& .MuiInputLabel-root": {
                    fontSize: "1.3rem"  // Cambia el tamaño del 
                }
            }}

            id="standard-password-input"
            label="Password"
            type="password"
            error={isPasswordValid}
            helperText={isPasswordValid ? "Must be at least 8 characters, contain a symbol and an uppercase letter." : ""}
            value={value}
            onChange={handlePasswordChange}
            variant="standard" />

    )
}