import * as React from 'react';
import { NavLink as RouterLink} from 'react-router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Watermelon from '../../assets/icons/watermelon.png'
import Boton from './Boton';
import { Button } from '@mui/material';


export default function Navbar() {

  return (
    <>
      <Box sx={{ width: 1, borderRadius: 1 }}>
        <AppBar position="static" color="primary" sx={{ borderRadius: 1 }}>
          <Toolbar>
            <Box component="img" sx={{ height: 60 }} alt="Your logo." src={Watermelon} />
            <Typography color="secondary" variant="h3" component="div" sx={{ flexGrow: 1 }}>
              Harray Up!
            </Typography>
            <Button component={RouterLink} to="/login" color='tertiary' variant='contained' style={{ fontSize: '20px', marginRight: '30px' }}>Login</Button>
            <Boton color="tertiary" texto="dashboard"></Boton>
          </Toolbar>
        </AppBar>
      </Box>

    </>
  );
}