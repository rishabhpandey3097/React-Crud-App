import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./AddUsers.module.css";

import {
  FormGroup,
  InputLabel,
  FormControl,
  Input,
  Button,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { postUser } from "../service/api";

const userModel = {
  name: "",
  username: "",
  email: "",
  phone_number: "",
};

const AddUsers = (props) => {
  const [user, setUser] = useState(userModel);
  const { name, username, email, phone_number } = user;
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const formChangeHandler = async () => {
    await postUser(user);
    navigate("/all-users");
  };
  return (
    <>
      <FormGroup className={classes.form}>
        <FormControl className={classes.form_control}>
          <InputLabel> Name </InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name" />
        </FormControl>
        <FormControl className={classes.form_control}>
          <InputLabel> Username </InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="username" />
        </FormControl>
        <FormControl className={classes.form_control}>
          <InputLabel> Email </InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="email" />
        </FormControl>
        <FormControl className={classes.form_control}>
          <InputLabel> Phone Number </InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="phone_number" />
        </FormControl>
        <Button
          className={classes.btn}
          onClick={formChangeHandler}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Add User
        </Button>
      </FormGroup>
    </>
  );
};

export default AddUsers;
