import * as React from 'react';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from '@mui/material';
import { useLevelContext } from '../../Contexts/LevelContext';
import { levelList } from '../../levels';


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
            <Button
                color="tertiary"
                variant='contained'
                style={{ fontSize: '20px', marginRight: '30px', marginLeft: '15px', marginTop: '5px', padding: '0px', paddingLeft: '10px' }}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                Level {level.id}
                <Icon style={{ alignContent: 'center', marginLeft: '10px', fontSize: '40px' }} >arrow_drop_down</Icon>
            </Button>
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