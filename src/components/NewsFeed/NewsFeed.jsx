import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadNews } from '../../store/actions';
import { Grid, makeStyles, Link, CircularProgress } from '@material-ui/core';

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
  loader: {
    margin: '0 auto',
  },
}));

const NewsFeed = ({ newsFeedHovered }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const news = useSelector((state) => state.newsFeed.newsFeed);
  const loading = useSelector((state) => state.newsFeed.loading);

  useEffect(() => {
    dispatch(loadNews());
  }, [dispatch]);

  return (
    <Grid className={classes.root} container spacing={4}>
      {loading ? (
        <Grid className={classes.loader} item>
          <CircularProgress size={100} />
        </Grid>
      ) : (
        news.map(({ author, url, urlToImage, publishedAt, description }) => (
          <Grid key={url} item xs={4}>
            <Link className={classes.singleNewsLink} target="_blank" href={url}>
              <SingleNews
                imgUrl={urlToImage}
                date={publishedAt}
                description={description}
                author={author}
              />
            </Link>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default NewsFeed;
