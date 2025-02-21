import * as React from 'react';
import Button from '@mui/material/Button';

export default function BtnLoginModal({ texto, color }) {

    return (
        <>
            <Button color={color} variant='contained' style={{ fontSize: '20px', marginRight: '30px' }}>{texto}</Button>
            
        </>
    )
}