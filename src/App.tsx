import React, { useCallback, useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { CustomTabPanel } from './component/TabPanel';
import { UsersTable } from './component/Table/UsersTable';
import { Slider, Typography } from '@mui/material';
import { io } from 'socket.io-client';

export type UserData = {
  avatar: string;
  email: string;
  score: number;
  userId: string;
  username: string;
};

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [sliderValue, setsliderValue] = useState<number>(10);
  const [userData, setUserData] = useState<UserData[]>([]);
  const [lastUpdatedUserID, setLastUpdatedUserID] = useState('');

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleChangeSlider = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setsliderValue(newValue);
      setUserData((prevArray) => {
        return prevArray.slice(0, newValue);
      });
    }
  };

  const handleDeleteUser = (userId: string) => {
    setUserData((prevArray) =>
      prevArray.filter((item) => item.userId !== userId),
    );
  };

  const handleSetUserData = useCallback(
    (newData: UserData) => {
      setLastUpdatedUserID(newData.userId);
      setUserData((prevArray) =>
        [...prevArray, newData]
          .sort((a, b) => a.score - b.score)
          .reverse()
          .slice(0, sliderValue),
      );
    },
    [sliderValue, userData],
  );

  useEffect(() => {
    const socket = io('ws://localhost:3001');

    socket.on('userData', (data) => {
      handleSetUserData(data);
    });

    return () => {
      socket.disconnect();
    };
  }, [handleSetUserData]);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={selectedTab} onChange={handleChangeTab}>
          <Tab label="Leaderboard" />
          <Tab label="Settings" />
        </Tabs>
      </Box>
      <CustomTabPanel value={selectedTab} index={0}>
        <UsersTable
          userData={userData}
          maxDataVisible={sliderValue}
          handleDeleteUser={handleDeleteUser}
          lastUpdatedUserID={lastUpdatedUserID}
        />
      </CustomTabPanel>
      <CustomTabPanel value={selectedTab} index={1}>
        <Typography gutterBottom>Limit</Typography>
        <Slider
          defaultValue={10}
          valueLabelDisplay="auto"
          marks={[
            { value: 0, label: '1' },
            { value: 20, label: '20' },
          ]}
          step={1}
          min={0}
          max={20}
          onChange={handleChangeSlider}
          value={sliderValue}
        />
      </CustomTabPanel>
    </Box>
  );
};

export default App;
