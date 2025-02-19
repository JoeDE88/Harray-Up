import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import EmailInput from '../register/EmailInput';
import PasswordInput from '../register/PasswordInput';
import { Button, Typography } from '@mui/material';
import UserInput from '../login/UserInput';

export default function LoginRegisterTabs() {
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
        <Box sx={{ width: '100%', maxWidth: '600px', textAlign: 'center', padding:6,pb:0, fontSize: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                <Box sx={{display:"flex", flexDirection:"column"}}>
                <UserInput ></UserInput>
                </Box>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                    <Button variant='contained' sx={{ backgroundColor: 'tertiary.main', color: 'tertiary.contrastText', padding: '5px 15px', fontSize: '1.5rem' }}>Login</Button>
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Create new account
                </Typography>
                <Box sx={{display:"flex", flexDirection:"column"}}>
                <EmailInput></EmailInput>
                <PasswordInput></PasswordInput>
                </Box>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                    <Button variant='contained' sx={{ backgroundColor: 'tertiary.main', color: 'tertiary.contrastText', padding: '5px 15px', fontSize: '1.3rem' }}>Sign Up</Button>
                </div>
            </CustomTabPanel>
        </Box>
    );
}
