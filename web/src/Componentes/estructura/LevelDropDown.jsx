import * as React from 'react';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from '@mui/material';

export default function LevelDropdown({ levels, onLevelSelect }) {
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
        "&:hover": {
            backgroundColor: theme.palette.tertiary.main
        }
    };

    return (
        <div>
            <Button 
                color="tertiary" 
                variant='contained' 
                style={{ fontSize: '20px', marginRight: '30px', marginLeft: '15px', marginTop: '5px', padding:'0px', paddingLeft:'10px' }}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                Level 1
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
                {levels.map((level) => (
                    <MenuItem 
                        sx={menuItemStyles} 
                        variant='contained' 
                        onClick={() => { onLevelSelect(level); handleClose(); }}
                    >
                        {level}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}