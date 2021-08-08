import React from "react";
import { Button } from "@material-ui/core";
import useStyles from "./styles";

function SubmitButton() {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      type="submit"
      variant="contained"
      color="primary"
    >
      Submit
    </Button>
  );
}

export default SubmitButton;
