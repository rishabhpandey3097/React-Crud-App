import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { deleteUser, getUsers } from "../service/api";
import classes from "./AllUsers.module.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { pink } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const AllUsers = (props) => {
  const [users, setUsers] = useState([]);

  const allUsersList = async () => {
    const { data } = await getUsers();
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    allUsersList();
  }, []);

  const deleteUserHandler = async (id) => {
    await deleteUser(id);
    allUsersList();
  };
  return (
    <TableContainer className={classes.table_container} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className={classes["table-head"]}>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Username</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone Number</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell align="center">{user.name}</TableCell>
              <TableCell align="center">{user.username}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center">{user.phone_number}</TableCell>
              <TableCell align="center">
                <IconButton
                  onClick={() => deleteUserHandler(user.id)}
                  aria-label="delete"
                  size="large"
                >
                  <DeleteIcon sx={{ color: pink[500] }} />
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton
                  component={Link}
                  to={`/edit-user/${user.id}`}
                  color="primary"
                  aria-label="delete"
                  size="large"
                >
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllUsers;
