import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

interface UserTableType {
  userData: Array<{
    avatar: string;
    email: string;
    score: number;
    userId: string;
    username: string;
  }>;
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
  console.log('RERENDER');

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left">Username</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Score</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.slice(0, maxDataVisible).map((row) => (
            <TableRow
              key={row.userId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">
                <img
                  srcSet={row.avatar}
                  src={row.avatar}
                  alt={row.username}
                  loading="lazy"
                  width={40}
                  height={40}
                />
              </TableCell>
              <TableCell align="left">{row.username}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.score}</TableCell>
              <TableCell align="left">
                <IconButton
                  aria-label="delete"
                  color="primary"
                  onClick={() => handleDeleteUser(row.userId)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
