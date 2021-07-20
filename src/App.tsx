import React from "react";

import { Box, Grid, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import BoardItem from "./compoents/BoardItem/BoardItem";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));

export default function App() {
  const classes = useStyles();

  return (
    <Box mt={4} mb={4} className={classes.root}>
      <Grid container alignItems="center" justify="center">
        <BoardItem />
      </Grid>
    </Box>
  );
}
