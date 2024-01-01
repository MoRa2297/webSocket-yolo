import React from 'react';
import TableCell from '@mui/material/TableCell';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, TableRow } from '@mui/material';
import { UserData } from '../../App';
import './FlashTableRow.css';

interface UserTableRowType {
  data: UserData;
  isNewUser: boolean;
  handleDeleteUser: (id: string) => void;
}

export const UserTableRow: React.FC<UserTableRowType> = ({
  data,
  isNewUser,
  handleDeleteUser,
}) => {
  return (
    <TableRow
      key={data.userId}
      className={`flash${isNewUser ? ' animated' : ''}`}
    >
      <TableCell align="left">
        <img
          srcSet={data.avatar}
          src={data.avatar}
          alt={data.username}
          width={40}
          height={40}
        />
      </TableCell>
      <TableCell align="left">{data.username}</TableCell>
      <TableCell align="left">{data.email}</TableCell>
      <TableCell align="left">{data.score}</TableCell>
      <TableCell align="left">
        <IconButton
          aria-label="delete"
          color="primary"
          onClick={() => handleDeleteUser(data.userId)}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
