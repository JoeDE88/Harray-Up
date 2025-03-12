import Button from '@mui/material/Button';

export default function BotonGenerico({texto,funcion}) {
    return (
        <Button onClick={funcion} color="tertiary" variant='contained' style={{ fontSize: '1.3rem'}}>{texto}</Button>
    )
}