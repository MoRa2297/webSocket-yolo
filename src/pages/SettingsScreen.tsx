import React, { useState } from 'react';
import { UsersTable } from '../component/Table/UsersTable';
import { UserData } from '../types';
import { Box, Slider, Typography } from '@mui/material';
import { useAppData } from '../hooks/useStores';

interface SettingsScreenType {}

export const SettingsScreen: React.FC<SettingsScreenType> = ({}) => {
  const { sliderValue, updateSliderValue } = useAppData();

  const handleChangeSlider = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      // setsliderValue(newValue);
      // setUserData((prevArray) => {
      //   return prevArray.slice(0, newValue);
      // });
      updateSliderValue(newValue);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography gutterBottom>Limit</Typography>
      <Slider
        defaultValue={10}
        valueLabelDisplay="auto"
        marks={[
          { value: 0, label: '1' },
          { value: 20, label: '20' },
        ]}
        step={1}
        min={1}
        max={20}
        onChange={handleChangeSlider}
        value={sliderValue}
      />
    </Box>
  );
};
