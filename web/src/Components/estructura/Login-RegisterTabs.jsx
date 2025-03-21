import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState, useCallback } from 'react';
import { Typography, TextField } from '@mui/material';
import { UserContext } from '../../Contexts/UserContext.jsx';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import BotonGenerico from '../BotonGenerico.jsx';
import { handleEmailChange, handlePasswordChange, validateEmail, validatePassword } from '../../utils/validations.js';

// Funcionalidad de MUI para cambiar tabs
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 5, fontSize: '2rem' }}>{children}</Box>}
        </div>
    );
}

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

    // estado y funcionalidad de cambio de tabs
    const [value, setValue] = useState(0);
    const handleChangeTab = useCallback((event, newValue) => {
        setValue(newValue);
    }, []);

    // valores iniciales de email y password
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");

    // validación de email y password al registrarse
    const [isEmailInvalid, setisEmailInvalid] = useState(false);
    const [isPasswordInvalid, setisPasswordInvalid] = useState(false);

    const handleEmail = handleEmailChange(setSignInEmail, setisEmailInvalid);
    const handlePassword = handlePasswordChange(setSignInPassword, setisPasswordInvalid);

    const handleRegister = (e) => {
        if (e.keyCode === 13) {
            if (!isPasswordInvalid && !isEmailInvalid) {
                register(signInEmail, signInPassword)
            }
        }
    }

    // uso del contexto
    const { login, register } = useContext(UserContext)
    const navigate = useNavigate();

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
                        onChange={(e) => setLoginEmail(e.target.value)}
                        onKeyDown={(e) => { if (e.keyCode === 13) login(loginEmail, loginPassword, navigate) }}
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
                        onKeyDown={(e) => { if (e.keyCode === 13) login(loginEmail, loginPassword, navigate) }}
                        variant="standard" />
                </Box>
                <div style={{ justifyContent: 'center', marginTop: '30px' }}>
                    <BotonGenerico texto={"Login"} handleClick={() => login(loginEmail, loginPassword, navigate)}></BotonGenerico>
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
                        error={isEmailInvalid}
                        value={signInEmail} // Valor controlado
                        onChange={handleEmail}
                        helperText={isEmailInvalid ? "Please enter a valid email address." : ""}
                        onKeyDown={(e) => handleRegister(e)}
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
                        error={isPasswordInvalid}
                        type="password"
                        value={signInPassword}
                        onChange={handlePassword}
                        helperText={isPasswordInvalid ? "Must be at least 8 characters, contain a symbol and an uppercase letter." : ""}
                        onKeyDown={(e) => handleRegister(e)}
                        variant="standard" />
                </Box>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                    <BotonGenerico texto={"Sign Up"} handleClick={handleRegister}></BotonGenerico>
                </div>
            </CustomTabPanel>
        </Box>
    );
}