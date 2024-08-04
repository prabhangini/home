import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import TabContent from './TabContent';
import './TabContainer.css'; // Ensure this file exists

const TabContainer = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={activeTab} onChange={handleChange} centered>
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
      <Box sx={{ padding: 2, marginTop: 2 }}>
        {tabs.map((tab, index) => (
          <TabContent
            key={index}
            tabContent={tab.content}
            activeTab={activeTab}
            index={index}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TabContainer;
