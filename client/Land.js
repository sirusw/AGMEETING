import { Link, NavLink } from "react-router-dom";
import React from "react";
import { useState } from "react";
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
  experimentalStyled
} from "@mui/material";
import {connect} from 'react-redux';


const mapStateToProps = (state)=>{
  return{
      currentUser: state.currentUser
  }
}

const StyledTypography =  experimentalStyled(Typography)(({ theme }) => ({
  ...(theme.palette.mode === 'light' && {
    color: theme.palette.primary.dark
}),
...(theme.palette.mode === 'dark' && {
   color: theme.palette.primary.light
})
}))


function Land({dispatch, currentUser}) {
  const [enteredUsername, setEnteredUsername] = useState("")
  

  const onButtonClick = async (e)=>{
    console.log(currentUser)
    dispatch({
      type: "STORE_USER",
      payload: {username: enteredUsername}
    })
    console.log(currentUser)
  }
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
        <StyledTypography variant="h1">AGMEETING</StyledTypography>
      </Grid>
      <Grid container item direction="column" alignContent="center">
        <Card style={{ display: "inline-block" }}>
          <CardContent>
            <TextField placeholder="Username" fullWidth onChange={(e)=>{setEnteredUsername(e.target.value)}}></TextField>
            <TextField
              placeholder="Password"
              type="password"
              fullWidth
            ></TextField>
            <Link to="dashboard"><Button onClick={(e)=>onButtonClick(e)}>Login</Button></Link>
            <Button href="create-account" sx={{ display: "block", width:'40%'}}>No account? Create one!</Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default connect(mapStateToProps)(Land);
