import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import EmailInput from '../register/EmailInput';
import PasswordInput from '../register/PasswordInput';
import { Button, Typography } from '@mui/material';
import UserInput from '../login/UserInput';

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
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '70%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'tertiary.main' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Login" {...a11yProps(0)} />
                    <Tab label="Sign up" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    New user? Click on sign up.
                </Typography>
                <UserInput></UserInput>
                <div>
                    <Button variant='contained' sx={{ backgroundColor: 'tertiary.main', color: 'tertiary.contrastText', marginTop: '15px', marginLeft: '10px' }}>Login</Button>
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Create new account
                </Typography>
                <EmailInput></EmailInput>
                <PasswordInput></PasswordInput>
                <div>
                    <Button variant='contained' sx={{ backgroundColor: 'tertiary.main', color: 'tertiary.contrastText', marginTop: '15px', marginLeft: '10px' }}>Sign Up</Button>
                </div>
            </CustomTabPanel>
        </Box>
    );
}