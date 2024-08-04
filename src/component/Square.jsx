import React from 'react';
import { Box, Typography } from '@mui/material';

const Square = ({backgroundColor}) => {
  const squareStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: backgroundColor, // Change color as per your requirement
  };

  return (
    <Box style={squareStyle} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
      <Typography sx={{ color: 'white'}}>
        { backgroundColor }
      </Typography>
    </Box>
  );
};

export default Square;
