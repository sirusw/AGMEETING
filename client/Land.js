import { Link } from "react-router-dom";
import React from "react";
import { Outlet } from "react-router";
import DashboardLayout from "./Component/DashBoard/Layout";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";

function Land() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh", backgroundColor: "#171C24" }}
    >
      <Grid container direction="column" alignContent="center">
        <Typography variant="h1">AGMEETING</Typography>
      </Grid>
      <Grid container item direction="column" alignContent="center">
        <Card style={{ display: "inline-block" }}>
          <CardContent>
            <TextField placeholder="Username" fullWidth></TextField>
            <TextField
              placeholder="Password"
              type="password"
              fullWidth
            ></TextField>
            <Button href="dashboard">Login</Button>
            <Button href="create-account" sx={{ display: "block", width:'40%'}}>
              No account? Create one!
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Land;
