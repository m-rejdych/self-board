import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadNews } from '../../store/actions';
import { Grid, makeStyles, Link } from '@material-ui/core';

import SingleNews from './SingleNews';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  singleNewsLink: {
    '&:link, &:visited': {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
}));

const NewsFeed = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const news = useSelector((state) => state.newsFeed.newsFeed);

  useEffect(() => {
    dispatch(loadNews());
  }, [dispatch]);

  return (
    <Grid className={classes.root} container spacing={4}>
      {news.map(({ author, url, urlToImage, publishedAt, description }) => (
        <Grid item xs={6}>
          <Link className={classes.singleNewsLink} target="_blank" href={url}>
            <SingleNews
              imgUrl={urlToImage}
              date={publishedAt}
              description={description}
              author={author}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsFeed;
