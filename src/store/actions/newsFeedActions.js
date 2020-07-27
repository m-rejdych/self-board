import { NEWS_FEED } from '../constans';

const loadNews = () => ({
  type: NEWS_FEED.LOAD_NEWS,
});

const setLoadNews = (newsFeed) => ({
  type: NEWS_FEED.LOAD_NEWS_SUCCESS,
  payload: newsFeed,
});

const setLoadNewsError = (error) => ({
  type: NEWS_FEED.LOAD_NEWS_FAIL,
  payload: error,
});

export { loadNews, setLoadNews, setLoadNewsError };
