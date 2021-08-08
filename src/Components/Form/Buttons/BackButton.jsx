import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import useStyles from "./styles";

function BackButton({ to }) {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      variant="outlined"
      to={to}
      component={Link}
    >
      Back
    </Button>
  );
}

export default BackButton;
