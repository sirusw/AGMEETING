import { Box, Button } from '@mui/material';
import React from "react";
import {Grid} from '@mui/material'


const Interactions = () => (
  <div>
    <Box
      sx={{
        backgroundColor: 'background.paper',
        p: 3,
        width: '90%',
        margin: 'auto'
      }}
    >       
      <Grid container spacing={2} rowSpacing={4}>
        <Grid item xs={6} >
          <Button
            color="primary"
            size="large"
            variant="contained"
            fullWidth
            > Button 
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            color="primary"
            size="large"
            variant="contained"
            fullWidth
          >SecondItem
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            color="primary"
            size="large"
            variant="contained"
            fullWidth
          >
            Comment For
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            color="primary"
            size="large"
            variant="contained"
            fullWidth
          >
            Comment Against
          </Button>
        </Grid>
        <Grid item xs={12}>     
          <Button
              color="primary"
              size="large"
              variant="contained"
              fullWidth
              >
              Withdraw Comment
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            color="primary"
            size="medium"
            variant="contained"
            fullWidth
          >
            Button
          </Button>
        </Grid>
        <Grid item  xs={4}>
          <Button
            color="primary"
            size="medium"
            variant="contained"
            fullWidth
          >
            Comment Against
          </Button>
        </Grid>
        <Grid item  xs={4}>
          <Button
            color="primary"
            size="medium"
            variant="contained"
            fullWidth
          >
            Comment Against
          </Button>
        </Grid>
        <Grid item  xs={4}>
          <Button
            color="primary"
            size="medium"
            variant="contained"
            fullWidth
            >
            Comment Against
          </Button>
        </Grid>
        <Grid item  xs={4}>
          <Button
            color="primary"
            size="medium"
            variant="contained"
            fullWidth
            >
            Comment Against
          </Button>
        </Grid>
        <Grid item  xs={4}>
          <Button
            color="primary"
            size="medium"
            variant="contained"
            fullWidth
            >
            Comment Against
          </Button>
        </Grid>
      </Grid>
    </Box>
  </div>
);

export default Interactions;
