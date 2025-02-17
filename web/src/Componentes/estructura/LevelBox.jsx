import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Grid from '@mui/material/Grid2';

export default function LevelBox() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuItemStyles = {
        backgroundColor: "tertiary.main",
        color: "secondary.main",
        fontSize: '20px'
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid size={6}>
                    <Box
                        sx={{
                            height: 400,
                            borderRadius: 1,
                            bgcolor: 'secondary.main',
                            marginTop: '10px'
                        }}
                    >
                        <Button color="tertiary" variant='contained' style={{ fontSize: '20px', marginRight: '30px', marginLeft: '15px', marginTop: '15px' }}>
                            Level 1
                            <Icon style={{ alignContent: 'center', marginLeft: '10px', fontSize: '40px' }} aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={handleClick}>arrow_drop_down</Icon>
                        </Button>
                        <Menu color="tertiary" id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                            <MenuItem sx={menuItemStyles} variant='contained' onClick={handleClose}>Level 2</MenuItem>
                            <MenuItem sx={menuItemStyles} variant='contained' onClick={handleClose}>Level 3</MenuItem>
                            <MenuItem sx={menuItemStyles} variant='contained' onClick={handleClose}>Level 4</MenuItem>
                        </Menu><br />
                        <Box sx={{padding:'30px'}}>
                            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa vitae voluptatum illum sunt vel ut error veniam nobis possimus! Odio sed magni sunt numquam nisi veritatis consectetur iusto a laborum.</div>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={6}>
                <Box
                    sx={{
                        height: 400,
                        borderRadius: 1,
                        bgcolor: 'secondary.main',
                        marginTop: '10px'
                    }}
                ></Box>
                </Grid>
            </Grid>
        </>
    );
}