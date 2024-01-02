import React from 'react';
import { UsersTable } from '../component/Table/UsersTable';
import { UserData } from '../types';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import useSocket from '../hooks/useSocketConnection';
import { useAppData } from '../hooks/useStores';

interface TableScreenType {}

export const TableScreen: React.FC<TableScreenType> = ({}) => {
  const location = useLocation();
  const { userData, lastUpdatedUserID, sliderValue, deleteUserData } =
    useAppData();

  useSocket('ws://localhost:3001');
  console.log('pathname: ', location.pathname);

  return (
    <Box sx={{ p: 3 }}>
      <UsersTable
        userData={userData}
        maxDataVisible={sliderValue}
        handleDeleteUser={deleteUserData}
        lastUpdatedUserID={lastUpdatedUserID}
      />
    </Box>
  );
};
