import Button from '@mui/material/Button';

export default function BotonGenerico({texto,funcion,sx}) {
    return (
        <Button sx={sx} onClick={funcion} color="tertiary" variant='contained' style={{ fontSize: '1.2rem'}}>{texto}</Button>
    )
}