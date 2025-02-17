import Button from '@mui/material/Button';

export default function Boton({texto,color}) {
    return (
        <Button color={color} variant='contained' style={{ fontSize: '20px',marginRight:'30px' }}>{texto}</Button>
    )
}