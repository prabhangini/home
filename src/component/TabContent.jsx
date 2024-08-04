import React from 'react';
import { Box } from '@mui/material';
import CardGrid from "./CardGrid";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './TabContent.css'; // Ensure this file exists

const TabContent = ({ tabContent, activeTab, index }) => {
  const { images, texts, moreImages, moreTexts, links, moreLinks } = tabContent;

  return (
    <TransitionGroup>
      {activeTab === index && (
        <CSSTransition key={index} timeout={500} classNames="fade">
          <Box>
            <CardGrid 
              images={images} 
              texts={texts} 
              moreImages={moreImages} 
              moreTexts={moreTexts} 
              links={links} 
              moreLinks={moreLinks}
            />
          </Box>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export default TabContent;
