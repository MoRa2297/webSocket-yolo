import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { CustomTabPanel } from './component/TabPanel';
import { UsersTable } from './component/UsersTable';
import { Slider, Typography } from '@mui/material';

const App: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log('newValue: ', newValue);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Leaderboard" />
          <Tab label="Settings" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <UsersTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography gutterBottom>Tooltip value label</Typography>
        <Slider
          defaultValue={20}
          aria-label="Default"
          valueLabelDisplay="auto"
          marks={[
            { value: 0, label: '1' },
            { value: 20, label: '20' },
          ]}
          step={1}
          min={0}
          max={20}
        />
      </CustomTabPanel>
    </Box>
  );
};

export default App;
