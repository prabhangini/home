import React from 'react';
import { Box } from '@mui/material';
import CardGrid from "./CardGrid";
import './TabContent.css'; // Ensure this file exists

const TabContent = ({ tabContent }) => {
    const { images, texts, moreImages, moreTexts, links, moreLinks } = tabContent;

    return (
        <Box sx={{ padding: 2 }}>
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
        </Box>
    );
};

export default TabContent;
