import React, { Fragment } from 'react';

import LandingPage from '../../components/LandingPage';
import TodosPreview from '../../components/Previews/TodosPreview';
import NewsFeedPreview from '../../components/Previews/NewsFeedPreview';
import CalendarPreview from '../../components/Previews/CalendarPreview';

const Home = () => (
  <Fragment>
    <LandingPage />
    <TodosPreview />
    <NewsFeedPreview />
    <CalendarPreview />
  </Fragment>
);

export default Home;
