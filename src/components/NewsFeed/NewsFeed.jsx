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
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
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
  const [placeholder, setPlaceholder] = useState('Search');

  useEffect(() => {
    dispatch(loadNews());
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(loadNews(value));
    setPlaceholder(value);
    setValue('');
  };

  return (
    <Grid className={classes.root} container spacing={4}>
      <Grid item className={classes.searchBarContainer} xs={12}>
        <TextField
          className={classes.searchBar}
          value={value}
          placeholder={placeholder}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment
                className={classes.inputAdornment}
                onClick={handleSearch}
              >
                <SearchIcon />
              </InputAdornment>
            ),
          }}
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
          <Grid key={url} item xs={12} sm={6} md={4}>
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
