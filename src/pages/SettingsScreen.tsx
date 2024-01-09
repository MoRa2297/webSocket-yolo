import React from 'react';
import { Box, Slider, Typography } from '@mui/material';
import { useAppData } from '../hooks/useAppData';

export const SettingsScreen: React.FC = () => {
  const { sliderValue, updateSliderValue, updateUserData } = useAppData();

  const handleChangeSlider = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
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
