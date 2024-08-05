import React, { useState, useRef, useEffect } from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import './CardGrid.css';

const Card = ({ imageSrc, link, text }) => {
  return (
    <div className="card">
      <a href={link} rel="noopener noreferrer">
      <div className="card__img-container">
      <img src={imageSrc} alt={text} className="card__img" />
      </div>
      {/* <div className="card__subtitle">{text}</div> */}
      <div className="card__wrapper">
        <div className="card__title">{text}</div>
        {/* <div className="card__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style={{ userSelect: 'none', width: '100%', height: '100%', display: 'inline-block', fill: 'rgb(224, 223, 220)', flexShrink: 0, cursor: 'auto' }} color="rgb(224, 223, 220)">
            <g color="rgb(224, 223, 220)">
              <circle cx="128" cy="128" r="96" opacity="0.2"></circle>
              <circle cx="128" cy="128" r="96" fill="none" stroke="rgb(224, 223, 220)" strokeMiterlimit="10" strokeWidth="16"></circle>
              <polyline points="134.1 161.9 168 128 134.1 94.1" fill="none" stroke="rgb(224, 223, 220)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
              <line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="rgb(224, 223, 220)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
            </g>
          </svg>
        </div> */}
      </div>
      </a>
    </div>
  );
};

const CardGrid = ({ images, links, texts, moreImages, moreLinks, moreTexts }) => {
  const [showMore, setShowMore] = useState(false);
  const moreSectionRef = useRef(null); // Ref for the more section

  const handleToggleImages = () => {
    setShowMore(!showMore);
    if (!showMore && moreSectionRef.current) {
      moreSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (showMore && moreSectionRef.current) {
      moreSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showMore]);

  return (
    <Box spacing={20}>
      <Grid container spacing={2}>
        {showMore ? moreImages.map((src, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card imageSrc={src} link={moreLinks[index]} text={moreTexts[index]} />
          </Grid>
        )) : images.slice(0, 3).map((src, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card imageSrc={src} link={links[index]} text={texts[index]} />
          </Grid>
        ))}
      </Grid>
      {showMore && (
        <Grid container spacing={2} sx={{ marginTop: 2 }} ref={moreSectionRef}>
          {moreImages.map((src, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card imageSrc={src} link={moreLinks[index]} text={moreTexts[index]} />
            </Grid>
          ))}
        </Grid>
      )}
      <Box display="flex" justifyContent="center" sx={{ marginTop: 2 }}>
        {!showMore && moreImages.length > 0 && (
          <IconButton onClick={handleToggleImages}>
            <KeyboardArrowDownRoundedIcon />
          </IconButton>
        )}
        {showMore && (
          <IconButton onClick={handleToggleImages} disabled={!showMore}>
            <KeyboardArrowUpRoundedIcon />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default CardGrid;
