import * as React from 'react';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from '@mui/material';
import { useLevelContext } from '../Contexts/LevelContext';
import { levelList } from '../levels';
import { BotonDropDown } from './BotonDropdown';
import Box from '@mui/material/Box';


export default function LevelDropdown({ levels }) {
    const { level, setLevel } = useLevelContext();

    const onLevelSelect = (level) => {
        setLevel(level)
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = useTheme();
    const menuItemStyles = {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        fontSize: '20px',
        width: '100px',
        "&:hover": {
            backgroundColor: theme.palette.tertiary.main
        }
    };

    return (
        <div>
                <BotonDropDown texto={`Level ${level.id}`} funcion={handleClick}></BotonDropDown>
                <Menu
                    color="tertiary"
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {levelList.map((level) => (
                        <MenuItem
                            key={level.id}
                            sx={menuItemStyles}
                            variant='contained'
                            onClick={() => { onLevelSelect(level); handleClose(); }}
                        >
                            Level {level.id}
                        </MenuItem>
                    ))}
                </Menu>
        </div>
    );
}