import React from 'react';
import { Box, Typography } from '@mui/material';

const Rectangle = ({ fontFamily, fontSize, fontsUsedWhere }) => {
    const squareStyle = {
        width: '140px',
        height: '80px',
        backgroundColor: "#DEDEDE", // Change color as per your requirement
    };

    return (
        <Box display={'flex'} flexDirection={'column'} m={1} >
            <Box component="div" style={squareStyle} display={'flex'} flexDirection={'row'} alignItems={'center'} p={2}>
                <Box component="div" backgroundColor='white' height={80} width={80} borderRadius={2}>
                    <Typography fontSize={50} p={1} fontFamily={fontFamily}>
                        Aa
                    </Typography>
                </Box>
                <Box p={1}>
                    <Box>
                        <Typography fontSize={12} fontFamily={fontFamily}>
                            {fontFamily}
                        </Typography>
                    </Box>
                    <Box>
                    <Typography fontSize={10} fontFamily={fontFamily}>
                            {`Font Size - ${fontSize}`}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
            <Typography fontSize={14} ontFamily="Jost">
                {fontsUsedWhere}
            </Typography>
            </Box>
        </Box>
    );
};

export default Rectangle;
