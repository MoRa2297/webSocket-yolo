import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const MainTabs: React.FC = () => {
  const location = useLocation();

  return (
    <Tabs value={location.pathname}>
      <Tab label="Leaderboard" component={Link} to="/" value="/" />
      <Tab label="Settings" component={Link} to="/settings" value="/settings" />
    </Tabs>
  );
};
