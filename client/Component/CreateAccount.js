import React from "react";
import {Grid, Typography, Card, CardContent, TextField, Button, experimentalStyled} from '@mui/material'



const StyledTypography =  experimentalStyled(Typography)(({ theme }) => ({
  ...(theme.palette.mode === 'light' && {
    color: theme.palette.primary.dark
}),
...(theme.palette.mode === 'dark' && {
   color: theme.palette.primary.light
})
}))

 
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
        <StyledTypography variant="h1">AGMEETING</StyledTypography>
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
            <Button href="/" sx={{ display: "block", width: '40%'}}>
              Create Account
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    )
}

export default CreateAccount