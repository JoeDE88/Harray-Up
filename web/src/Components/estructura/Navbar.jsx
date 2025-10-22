import * as React from 'react';
import { NavLink as RouterLink } from 'react-router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Watermelon from '../../assets/icons/watermelon.png'
import { Button, Container } from '@mui/material';
import { getAllLevels } from '../../services/api/api';
import { UserContext } from '../../Contexts/UserContext';
import { isEmpty } from "lodash";
import BotonGenerico from '../BotonGenerico.jsx';

export default function Navbar() {
  const { user, logout } = React.useContext(UserContext)

  // Obtener niveles desde el backend al montar el componente
  /* React.useEffect(() => {
    getAllLevels()
      .then((data) => {
        setLevels(data.content);
      })
      .catch((error) => console.error("Error fetching levels:", error));
  }, []); */

  return (
    <>
        <AppBar position="static" color="primary">
          <Container maxWidth="false">
            <Toolbar>
              <Box component="img" sx={{ imageRendering: 'pixelated', height: 60 }} alt="Your logo." src={Watermelon} />
              <Typography color="secondary" variant="h3" component="div" sx={{ flexGrow: 1 }}>
                Harray Up!
              </Typography>
              {!isEmpty(user) ? (
                <BotonGenerico texto={"Logout"} handleClick={() => logout()} />
              ) : (<Button
                component={RouterLink}
                to="/login"
                color='tertiary'
                variant='contained'
                style={{ fontSize: '20px', marginRight: '30px' }}
                onClick={() => logout()}>Logout</Button>)}
            </Toolbar>
          </Container>
        </AppBar>
    </>
  );
}