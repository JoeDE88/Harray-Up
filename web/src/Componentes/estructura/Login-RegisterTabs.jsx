import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import EmailInput from '../register/EmailInput';
import PasswordInput from '../register/PasswordInput';
import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import UserInput from '../login/UserInput';
import { login, register } from "../../calls.js"

export default function LoginRegisterTabs() {
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [signInEmail, setSignInEmail] = useState("")
    const [signInPassword, setSignInPassword] = useState("")

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
                {value === index && <Box sx={{ p: 6, fontSize: '2rem' }}>{children}</Box>}
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
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', maxWidth: '600px', textAlign: 'center', padding: 6, pb: 0, fontSize: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ borderBottom: 2, borderColor: 'tertiary.main', display: 'flex', justifyContent: 'center' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                    <Tab label="Login" sx={{ fontSize: '1.8rem', minWidth: 'auto' }} {...a11yProps(0)} />
                    <Tab label="Sign up" sx={{ fontSize: '1.8rem', minWidth: 'auto' }} {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    New user? Click on sign up.
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <>
                        <EmailInput
                            onChange={(e) => setLoginEmail(e.target.value)}
                            value={loginEmail}
                        />
                        <PasswordInput
                            onChange={(e) => setLoginPassword(e.target.value)}
                            value={loginPassword}
                        />
                    </>
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
                    <EmailInput onChange={setSignInEmail} value={signInEmail}></EmailInput>
                    <PasswordInput onChange={setSignInPassword} value={signInPassword}></PasswordInput>
                </Box>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                    <Button onClick={() => { register(signInEmail, signInPassword) }} variant='contained' sx={{ backgroundColor: 'tertiary.main', color: 'tertiary.contrastText', padding: '5px 15px', fontSize: '1.3rem' }}>Sign Up</Button>
                </div>
            </CustomTabPanel>
        </Box>
    );
}
