import React from "react";
import { Paper, CssBaseline, Typography } from "@material-ui/core";
import useStyles from "./styles";
function Container({ children }) {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar}>
        <div className={classes.layout}>
          <Typography variant="h6" gutterBottom>
            Complete these form(s) for your auto insurance quotations.
          </Typography>
          <Paper className={classes.paper} elevation={2}>
            {children}
          </Paper>
        </div>
      </div>
    </>
  );
}

export default Container;
