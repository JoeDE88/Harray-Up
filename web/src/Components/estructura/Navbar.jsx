import * as React from 'react';
import { NavLink as RouterLink } from 'react-router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Watermelon from '../../assets/icons/watermelon.png'
import { Button } from '@mui/material';
import LevelDropdown from './LevelDropDown';
import { getAllLevels } from '../../services/api/api';
import { UserContext } from '../../Contexts/UserContext';
import { isEmpty } from "lodash";

export default function Navbar() {
  const [levels, setLevels] = React.useState([]);
  const { user, logout } = React.useContext(UserContext)

  // Obtener niveles desde el backend al montar el componente
  React.useEffect(() => {
    getAllLevels()
      .then((data) => {
        setLevels(data.content);
      })
      .catch((error) => console.error("Error fetching levels:", error));
  }, []);

  return (
    <>
      <Box sx={{ width: 1, borderRadius: 1 }}>
        <AppBar position="static" color="primary" sx={{ borderRadius: 1 }}>
          <Toolbar>
          <LevelDropdown levels={levels} ></LevelDropdown>
            <Box component="img" sx={{ imageRendering:'pixelated', height: 60 }} alt="Your logo." src={Watermelon} />
            <Typography color="secondary" variant="h3" component="div" sx={{ flexGrow: 1 }}>
              Harray Up!
            </Typography>

            {!isEmpty(user) ? (
              <Button
                color='tertiary'
                variant='contained'
                style={{ fontSize: '20px', marginRight: '30px' }}
                onClick={() => logout()}>
                Logout
              </Button>
            ) : (<Button
              component={RouterLink}
              to="/login"
              color='tertiary'
              variant='contained'
              style={{ fontSize: '20px', marginRight: '30px' }}
              onClick={() => logout()}>Logout</Button>)}
          </Toolbar>
        </AppBar>
      </Box>

    </>
  );
}