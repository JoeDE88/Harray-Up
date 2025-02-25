import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState, useCallback } from 'react';
import { Button, Typography, TextField } from '@mui/material';
import { login, register } from "../../calls.js";

const CustomTabPanel = React.memo(function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 6, fontSize: '2rem' }}>{children}</Box>}
        </div>
    );
});

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function LoginRegisterTabs() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");

    const [value, setValue] = useState(0);

    const handleChangeTab = useCallback((event, newValue) => {
        setValue(newValue);
    }, []);

    return (
        <Box sx={{ width: '100%', maxWidth: '600px', textAlign: 'center', padding: 6, pb: 0, fontSize: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ borderBottom: 2, borderColor: 'tertiary.main', display: 'flex', justifyContent: 'center' }}>
                <Tabs value={value} onChange={handleChangeTab} aria-label="basic tabs example" centered>
                    <Tab label="Login" sx={{ fontSize: '1.8rem', minWidth: 'auto' }} {...a11yProps(0)} />
                    <Tab label="Sign up" sx={{ fontSize: '1.8rem', minWidth: 'auto' }} {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    New user? Click on sign up.
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <TextField
                        id="standard-email-input"
                        label="Email"
                        required
                        value={loginEmail} // Valor controlado
                        onChange={(e) => setLoginEmail(e.target.value)} // Cambio controlado
                        sx={{
                            color: 'tertiary.contrastText',
                            '& .MuiInputLabel-root': {
                                fontSize: '1.3rem',
                            },
                        }}
                        variant="standard" />
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
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)} // Corregido el onChange
                        variant="standard" />
                </Box>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                    <Button onClick={() => { login(loginEmail, loginPassword) }} variant='contained' sx={{ backgroundColor: 'tertiary.main', color: 'tertiary.contrastText', padding: '5px 15px', fontSize: '1.3rem' }}>Login</Button>
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Create new account
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <TextField
                        id="standard-email-input"
                        label="Email"
                        required
                        value={signInEmail} // Valor controlado
                        onChange={(e) => setSignInEmail(e.target.value)} // Cambio controlado
                        sx={{
                            color: 'tertiary.contrastText',
                            '& .MuiInputLabel-root': {
                                fontSize: '1.3rem',
                            },
                        }}
                        variant="standard" />
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
                        value={signInPassword}
                        onChange={(e) => setSignInPassword(e.target.value)} // Corregido el onChange
                        variant="standard" />
                </Box>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                    <Button onClick={() => { register(signInEmail, signInPassword) }} variant='contained' sx={{ backgroundColor: 'tertiary.main', color: 'tertiary.contrastText', padding: '5px 15px', fontSize: '1.3rem' }}>Sign Up</Button>
                </div>
            </CustomTabPanel>
        </Box>
    );
}