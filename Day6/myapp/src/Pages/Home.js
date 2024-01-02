// import React from 'react'

// function Home() {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
const Item = styled(Paper)(({ theme }) => ({
  background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59),
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function GridEg() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={3}>
        <Container fixed>
        <Box sx={{ background: 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)',height:'40vh'}} />
      </Container>
        </Grid>
        <Grid item xs={3}>
        <Container fixed>
        <Box sx={{ background: 'linear-gradient(to right, #be93c5, #7bc6cc)',height:'40vh'}} />
      </Container>
        </Grid>
        <Grid item xs={3}>
        <Container fixed>
        <Box sx={{ background: 'linear-gradient(to right, #f953c6, #b91d73)',height:'40vh' }} />
      </Container>
        </Grid>
        <Grid item xs={3}>
        <Container fixed>
        <Box sx={{ background: 'linear-gradient(to right, #c31432, #240b36)',height:'40vh'}} />
      </Container>
        </Grid>
      </Grid>
    </Box>
  );
}