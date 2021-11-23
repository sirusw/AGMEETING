import React from 'react';
import { Typography, Grid } from '@mui/material';

const Welcome = ()=>{
    return(
      <Grid item container direction="column" justifyContent='center' alignItems='center'>
        <Typography variant="h2" sx={{color:"white"}}>Welcome To AGMEETING</Typography>
        <Typography variant="h3" sx={{color:"white"}} >Click one of the links to be taken to it's page.</Typography>
      </Grid>
    )
  } 

export default Welcome