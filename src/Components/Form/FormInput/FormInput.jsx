import React, { forwardRef } from "react";
import { TextField, Grid } from "@material-ui/core";

const FormInput = forwardRef((props, ref) => {
  return (
    <Grid item xs={12} sm={6}>
      <TextField innerRef={ref} {...props} fullWidth required></TextField>
    </Grid>
  );
});

export default FormInput;
