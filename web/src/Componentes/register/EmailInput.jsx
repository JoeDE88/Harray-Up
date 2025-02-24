import *  as React from 'react';
import { validateEmail } from '../../utils/validations';
import { TextField } from '@mui/material';

export default function EmailInput(onChange, value) {
    const [isEmailValid, setIsEmailValid] = React.useState(false);

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        onChange(newEmail);
        setIsEmailValid(!validateEmail(newEmail));
    };

    return (
        <TextField

            id="standard-required"
            label="Email"
            required
            error={isEmailValid}
            helperText={isEmailValid ? "Please enter a valid email address." : ""}
            value={value}
            onChange={handleEmailChange}
            sx={{ color: 'tertiary.contrastText', "& .MuiInputLabel-root": { 
                fontSize: "1.3rem"}}}         
            variant="standard" />
            
    )
}