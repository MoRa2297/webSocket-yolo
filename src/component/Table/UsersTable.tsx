import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { UserTableRow } from './UserTableRow';
import { UserData } from '../../types';

interface UserTableType {
  userData: UserData[];
  maxDataVisible: number;
  handleDeleteUser: (id: string) => void;
  lastUpdatedUserID: string;
}

export const UsersTable: React.FC<UserTableType> = ({
  userData,
  maxDataVisible,
  handleDeleteUser,
  lastUpdatedUserID,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="left">Username</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Score</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.slice(0, maxDataVisible).map((row) => (
            <UserTableRow
              key={row.userId}
              data={row}
              isNewUser={row.userId === lastUpdatedUserID}
              handleDeleteUser={handleDeleteUser}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
