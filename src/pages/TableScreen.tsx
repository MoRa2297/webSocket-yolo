import React from 'react';
import { UsersTable } from '../component/Table/UsersTable';
import { Box } from '@mui/material';
import useSocket from '../hooks/useSocketConnection';
import { useAppData } from '../hooks/useAppData';

interface TableScreenType {}

export const TableScreen: React.FC<TableScreenType> = ({}) => {
  const { userData, lastUpdatedUserID, sliderValue, deleteUserData } =
    useAppData();

  useSocket(process.env.REACT_APP_SERVER_URL as string);

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
