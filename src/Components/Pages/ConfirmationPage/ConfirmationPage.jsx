import React from "react";
import { Grid, Divider } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import useStyles from "../styles";
import Container from "../../Container/Container";
import { Review, SubmitButton, Form, BackButton } from "../../Form/index";

export default function ConfirmationPage({
  clientData,
  vehicleData,
  handleFinalSubmit,
}) {
  const classes = useStyles();
  const history = useHistory();
  const { handleSubmit } = useForm();
  const handleFinalClick = () => {
    swal(
      "Thank you for your response",
      "Our representative will reach out to you via your email within 24 hours.",
      "success"
    )
      .then((data) => {
        handleFinalSubmit({ ...clientData, ...vehicleData });
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleFinalClick)}>
        <Grid container spacing={3}>
          <Divider className={classes.divider} />
          <Grid item sm={12}>
            <Review heading={"Customer Details"} data={clientData} />
            <br />
            <Review heading={"Vehicle Details"} data={vehicleData} />
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <div className={classes.buttons}>
          <BackButton to={"/vehicle"} />
          <SubmitButton />
        </div>
      </Form>
    </Container>
  );
}
