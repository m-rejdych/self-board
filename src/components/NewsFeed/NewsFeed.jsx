import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadNews } from '../../store/actions';
import { Grid, Card, CardContent, CardHeader } from '@material-ui/core';

const NewsFeed = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.newsFeed.newsFeed);
  console.log(news);

  useEffect(() => {
    dispatch(loadNews());
  }, [dispatch]);

  return <Grid container></Grid>;
};

export default NewsFeed;
