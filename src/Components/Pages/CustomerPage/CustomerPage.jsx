import React from "react";
import { Grid, InputLabel, Divider, Typography } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useForm, Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import { useHistory } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { FormInput, SubmitButton, Form } from "../../Form/index";
import Container from "../../Container/Container";
import useStyles from "../styles";

export default function CustomerPage({ handleClick }) {
  const { register, handleSubmit, control } = useForm();
  const history = useHistory();
  const classes = useStyles();
  const onSubmit = (data, event) => {
    event.preventDefault();
    handleClick(data);
    history.push("/vehicle");
  };
  const onError = (error) => {
    console.log(error);
  };
  return (
    <Container>
      <div className={classes.formTitle}>
        <Typography variant="h6">Customer Details</Typography>
        <PeopleIcon style={{ marginTop: "2%" }} />
      </div>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Grid container spacing={3}>
          <FormInput
            {...register("firstName", { required: true })}
            name="firstName"
            label="First Name"
          />
          <FormInput
            {...register("lastName", { required: true })}
            label="Last Name"
          />
          <FormInput {...register("email", { required: true })} label="Email" />
          <Grid item xs={12} sm={6}>
            <InputLabel required style={{ paddingBottom: "10px" }}>
              Date of Birth
            </InputLabel>

            <Controller
              control={control}
              name="dob"
              label="Date of Birth"
              render={({ field: { onChange, value } }) => (
                <ReactDatePicker
                  required
                  onChange={onChange}
                  isClearable
                  selected={value}
                  maxDate={new Date()}
                  showYearDropdown
                  showMonthDropdown
                  dateFormat="yyyy-MMM-dd"
                />
              )}
            ></Controller>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <div style={{ justifyContent: "flex-end" }} className={classes.buttons}>
          <SubmitButton />
        </div>
      </Form>
    </Container>
  );
}
