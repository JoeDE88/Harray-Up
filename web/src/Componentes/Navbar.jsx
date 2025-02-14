import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Watermelon from '../assets/icons/watermelon.png'

export default function Navbar() {
  return (
    <Box sx={{ width: 1, borderRadius: 1 }}>
      <AppBar position="static" color="primary" sx={{ borderRadius:1 }}>
        <Toolbar>
        <Box component="img" sx={{ height: 64,}} alt="Your logo." src={Watermelon}/>
          <Typography color="secondary" variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Harray Up!
          </Typography>
          <Button color="secondary" variant="contained" style={{ fontSize: '20px',marginRight:'50px' }}>Login</Button>
          <Button color="tertiary" variant="contained" style={{ fontSize: '20px' }}>Dashboard</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}