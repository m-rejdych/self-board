import React from 'react';
import { Grid } from '@material-ui/core';

import LandingPage from '../../components/LandingPage';
import TodosPreview from '../../components/Previews/TodosPreview';

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <LandingPage />
      </Grid>
      <Grid item xs={12}>
        <TodosPreview />
      </Grid>
    </Grid>
  );
};

export default Home;
