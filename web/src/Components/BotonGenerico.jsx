import Button from '@mui/material/Button';

export default function BotonGenerico({texto,handleClick,sx}) {
    return (
        <Button size="medium" sx={sx} onClick={handleClick} color="tertiary" variant='contained' style={{ fontSize: '1.2rem'}}>{texto}</Button>
    )
}