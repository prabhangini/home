import { useState, useEffect } from 'react';
import { Grid, List, Typography, Link, Box } from '@mui/material';
import './Header.css';

const Header = () => {
  // Retrieve active link index from localStorage, default to 4 if not present
  const initialActiveLink = parseInt(localStorage.getItem('activeLink'), 10) || 0;
  const [activeLink, setActiveLink] = useState(initialActiveLink);

  // Update localStorage with the new active link index
  useEffect(() => {
    localStorage.setItem('activeLink', activeLink);
  }, [activeLink]);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <>
      <Box height={30} />
      <Grid container alignItems="center">
        <Grid item md={1} />
        <Grid item md={2} display="flex" justifyContent="center" alignItems="center">
          <img src='../../logo.svg' alt='Logo' />
        </Grid>
        <Grid item md={2} />
        <Grid item md={6}>
          <List
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Link href="/" underline="none" onClick={() => handleLinkClick(0)} >
              <Typography 
                color='black' 
                fontFamily='Jost' 
                fontSize={18} 
                style={{ 
                  color: activeLink === 0 ? '#B70909' : 'black',
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%'
                }}
              >
                HOME
              </Typography>
            </Link>
            <Link href="/design" underline="none" onClick={() => handleLinkClick(1)} >
              <Typography 
                color='black' 
                fontFamily='Jost' 
                fontSize={18} 
                style={{ 
                  color: activeLink === 1 ? '#B70909' : 'black',
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%'
                }}
              >
                UI/ UX
              </Typography>
            </Link>
            <Link href="/skills" underline="none" onClick={() => handleLinkClick(3)} >
              <Typography 
                color='black' 
                fontFamily='Jost' 
                fontSize={18} 
                style={{ 
                  color: activeLink === 3 ? '#B70909' : 'black',
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%'
                }}
              >
                SKILLS
              </Typography>
            </Link>
            <Link href="/about" underline="none" onClick={() => handleLinkClick(4)} >
              <Typography 
                color='black' 
                fontFamily='Jost' 
                fontSize={18} 
                style={{ 
                  color: activeLink === 4 ? '#B70909' : 'black',
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%'
                }}
              >
                ABOUT ME
              </Typography>
            </Link>
          </List>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
