import React, { useState, useEffect } from 'react';
import { Grid, List, Typography, Link, Box, useMediaQuery, useTheme } from '@mui/material';
import './Header.css';

const Header = () => {
  const initialActiveLink = parseInt(localStorage.getItem('activeLink'), 10) || 0;
  const [activeLink, setActiveLink] = useState(initialActiveLink);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    localStorage.setItem('activeLink', activeLink);
  }, [activeLink]);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <>
      <Box height={30} />
      <Grid container alignItems="center" justifyContent="space-between">
      <Grid item xs={1} md={1} display="flex" alignItems="center"/>
        <Grid item xs={7} md={7} >
          <Link href="/" underline="none">
            <img src='./logo.svg' alt='Logo' />
          </Link>
        </Grid>
        <Grid item xs={3} md={3}>
          <List
            sx={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'flex-end',
              alignItems: isMobile ? 'flex-end' : 'center',
              height: '100%',
            }}
          >
            <Link href="#/about" underline="none" onClick={() => handleLinkClick(4)} >
              <Typography 
                color='black' 
                fontFamily='Jost' 
                fontSize={18} 
                style={{ 
                  color: activeLink === 4 ? '#B70909' : 'black',
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%',
                  padding: isMobile ? '10px 0' : '0 15px',
                }}
              >
                ABOUT ME
              </Typography>
            </Link>
          </List>
        </Grid>
        <Grid item xs={1} md={1}>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;