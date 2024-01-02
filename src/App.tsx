import React from 'react';
import Box from '@mui/material/Box';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { TableScreen } from './pages/TableScreen';
import { SettingsScreen } from './pages/SettingsScreen';
import { MainTabs } from './component/MainTabs';
import { AppProvider } from './contexts/contexts';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <MainTabs />
          </Box>

          <Switch>
            <Route exact path="/">
              <TableScreen />
            </Route>
            <Route path="/settings">
              <SettingsScreen />
            </Route>
          </Switch>
        </Box>
      </Router>
    </AppProvider>
  );
};

export default App;
