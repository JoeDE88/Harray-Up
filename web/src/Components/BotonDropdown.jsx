import { Button, Icon } from "@mui/material";

export function BotonDropDown({texto,funcion}){
    return (
        <Button
        size="medium"
        onClick={funcion}
        color="tertiary"
        variant='contained'
        style={{ fontSize: '1.3rem'}}>
            {texto}
            <Icon style={{ fontSize: '2rem' }} >arrow_drop_down</Icon>
            </Button>
    )
}