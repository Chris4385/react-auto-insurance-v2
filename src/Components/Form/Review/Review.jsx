import React from "react";
import _ from "lodash";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from "@material-ui/core";

import useStyles from "./styles";

const Review = ({ data, heading }) => {
  const dataArr = Object.entries(data);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Divider />
      <Typography variant="h6" gutterBottom>
        {heading}
      </Typography>
      <Divider />
      <List disablePadding>
        {dataArr.map(([key, value]) => (
          <ListItem className={classes.listing} key={key}>
            <ListItemText primary={_.startCase(key)} />
            <Typography className={classes.values} variant="body2">
              {value}
            </Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Review;
