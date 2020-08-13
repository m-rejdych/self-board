import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadNews } from '../../store/actions';
import SearchIcon from '@material-ui/icons/Search';
import {
  Grid,
  makeStyles,
  Link,
  CircularProgress,
  TextField,
  InputAdornment,
} from '@material-ui/core';

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
  searchBarContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  searchBar: {
    width: '60%',
  },
  inputAdornment: {
    cursor: 'pointer',
    marginRight: theme.spacing(2),
  },
}));

const NewsFeed = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const news = useSelector((state) => state.newsFeed.newsFeed);
  const loading = useSelector((state) => state.newsFeed.loading);
  const [value, setValue] = useState('');

  useEffect(() => {
    dispatch(loadNews());
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(loadNews(value));
    setValue('');
  };

  const textFieldProps = {
    className: classes.searchBar,
    value: value,
    placeholder: 'Search',
    variant: 'outlined',
    InputProps: {
      startAdornment: (
        <InputAdornment
          className={classes.inputAdornment}
          onClick={handleSearch}
        >
          <SearchIcon />
        </InputAdornment>
      ),
    },
  };

  return (
    <Grid className={classes.root} container spacing={4}>
      <Grid item className={classes.searchBarContainer} xs={12}>
        <TextField
          {...textFieldProps}
          onChange={(event) => setValue(event.target.value)}
          onKeyPress={(event) => event.key === 'Enter' && handleSearch()}
        />
      </Grid>
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
