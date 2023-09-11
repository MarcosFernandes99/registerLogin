import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface ButtonRegisterProps{
    label:string;
    onClick: () => void
}

const ButtonRegister: React.FC<ButtonRegisterProps> = ({label, onClick}) => {
    return (
        <Button className="h-10 mt-10 text-xl bg-sky-400 rounded-xl p-2 font-bold"
            variant="contained"
            onClick={onClick}
        >
            {label}

        </Button>
    )
}

export default ButtonRegister