import React from "react";
import {Grid, Typography, Card, CardContent, TextField, Button} from '@mui/material'
 
const CreateAccount = (props)=>{
    return(
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
            <TextField placeholder="Email" fullWidth></TextField>
            <TextField placeholder="Username" fullWidth></TextField>
            <TextField
              placeholder="Password"
              type="password"
              fullWidth
            ></TextField>
            <TextField
              placeholder="Confirm Password"
              type="password"
              fullWidth
            ></TextField>
            <Button href="dashboard" sx={{ display: "block", width: '40%'}}>
              Create Account
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    )
}

export default CreateAccount