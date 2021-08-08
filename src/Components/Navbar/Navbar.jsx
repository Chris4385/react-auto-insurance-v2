import React from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import logo from "../../assets/icon.png";

function Navbar() {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            className={classes.title}
            color="inherit"
            variant="h6"
          >
            <img className={classes.image} src={logo} alt="icon-logo" />
            Auto Insurance
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
