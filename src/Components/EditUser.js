import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import classes from "./EditUser.module.css";
import { editUser } from "../service/api";

import {
  FormGroup,
  InputLabel,
  FormControl,
  Input,
  Button,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { getUsers, postUser } from "../service/api";

const userModel = {
  name: "",
  username: "",
  email: "",
  phone_number: "",
};

const EditUser = (props) => {
  const [user, setUser] = useState(userModel);
  const { name, username, email, phone_number } = user;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(id);
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const { data } = await getUsers(id);
    setUser(data);
    console.log(user);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserHandler = async () => {
    await editUser(id, user);
    navigate("/all-users");
  };
  return (
    <>
      <FormGroup className={classes.form}>
        <FormControl className={classes.form_control}>
          <InputLabel> Name </InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
        </FormControl>
        <FormControl className={classes.form_control}>
          <InputLabel> Username </InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="username"
            value={username}
          />
        </FormControl>
        <FormControl className={classes.form_control}>
          <InputLabel> Email </InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="email"
            value={email}
          />
        </FormControl>
        <FormControl className={classes.form_control}>
          <InputLabel> Phone Number </InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="phone_number"
            value={phone_number}
          />
        </FormControl>
        <Button
          className={classes.btn}
          onClick={editUserHandler}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Edit User
        </Button>
      </FormGroup>
    </>
  );
};

export default EditUser;
