import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface ButtonLoginProps{
    onClick: () => any
}

const ButtonLogin: React.FC<ButtonLoginProps> = ({onClick}) => {
    return (
        <Button className="h-10 mt-10 text-xl bg-sky-400 rounded-xl p-2 font-bold"
            variant="contained"
            onClick={onClick}
        >
            Registrar

        </Button>
    )
}

export default ButtonLogin