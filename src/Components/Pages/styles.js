import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  buttons: {
    display: "flex",
    justifyContent: "space-between",
  },
  divider: {
    margin: "20px 0 0",
  },
  select: {
    display: "flex",
    justifyContent: "space-between",
  },
  formTitle: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "34%",
    [theme.breakpoints.down("xs")]: {
      minWidth: "40%",
    },
  },
}));
