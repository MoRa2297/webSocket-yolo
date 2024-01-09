import React from 'react';
import { UsersTable } from '../component/Table/UsersTable';
import { Box } from '@mui/material';
import useSocket from '../hooks/useSocketConnection';
import { useAppData } from '../hooks/useAppData';

export const TableScreen: React.FC = () => {
  const { userData, lastUpdatedUserID, deleteUserData } = useAppData();

  useSocket(process.env.REACT_APP_SERVER_URL as string);

  return (
    <Box sx={{ p: 3 }}>
      <UsersTable
        userData={userData}
        handleDeleteUser={deleteUserData}
        lastUpdatedUserID={lastUpdatedUserID}
      />
    </Box>
  );
};
