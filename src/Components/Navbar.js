import React from "react";
import { NavLink } from "react-router-dom";

import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const useStyles = makeStyles({
  header: {
    background: "#111111",
  },
  tabs: {
    color: "#FFFFFF",
    textDecoration: "none",
    fontSize: 20,
    marginRight: 20,
  },
});

const Navbar = (props) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <NavLink className={classes.tabs} exact="true" to="/">
          Home
        </NavLink>
        <NavLink className={classes.tabs} exact="true" to="/all-users">
          All Users
        </NavLink>
        <NavLink className={classes.tabs} exact="true" to="/add-users">
          Add Users
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
