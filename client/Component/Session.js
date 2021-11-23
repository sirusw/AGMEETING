import React from "react";
import { Box, styled } from "@mui/system";
import useSettings from "../hooks/useSettings";
import { CardContent, Grid, Typography, Card, CardHeader } from "@mui/material";

const sessionItems = [
  {
    header: "Discussion point 1",
    text: "discussion stuff",
  },
  {
    header: "Discussion point 2",
    text: "discussion stuff",
  },
  {
    header: "Discussion point 3",
    text: "discussion stuff",
  },
  {
    header: "Discussion point 4",
    text: "discussion stuff",
  },
  {
    header: "Discussion point 5",
    text: "discussion stuff",
  },
];

const Session = (props) => {
  const { settings } = useSettings();
  return (
    <Grid container item direction="row" justifyContent="center">
      <Grid
        container
        item
        justifyContent="center"
        sx={{ marginBottom: "20px" }}
      >
        <Typography variant="h2" color="contrastText">
          Session
        </Typography>
      </Grid>
      <Grid item container direction="column" xs={5}>
        {sessionItems.map((item, key) => (
          <Card sx={{ marginBottom: "20px" }}>
            <CardHeader component="h1" title={item.header}></CardHeader>
            <CardContent>
              <Typography>{item.text}</Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};
export default Session;
