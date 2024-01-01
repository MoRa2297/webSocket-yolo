import Box from '@mui/material/Box';
import * as React from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const CustomTabPanel: React.FC<TabPanelProps> = ({
  children,
  value,
  index,
}) => {
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};
