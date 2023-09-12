import * as React from 'react';
import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';

interface InputsProps {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any
}

const Inputs: React.FC<InputsProps> = ({ label, value, onChange }) => {
  return (
    <Box
      sx={{
        py: 2,
        display: 'grid',
        gap: 2,
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Input placeholder={label} variant="outlined" color="primary"
        onChange={onChange}
        value={value}
      />

    </Box>
  );
}

export default Inputs