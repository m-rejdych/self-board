import { NEWS_FEED } from '../constans';

const loadNews = (search='') => ({
  type: NEWS_FEED.LOAD_NEWS,
  payload: search,
});

const loadNewsSuccess = (newsFeed) => ({
  type: NEWS_FEED.LOAD_NEWS_SUCCESS,
  payload: newsFeed,
});

const loadNewsFail = (error) => ({
  type: NEWS_FEED.LOAD_NEWS_FAIL,
  payload: error,
});

export { loadNews, loadNewsSuccess, loadNewsFail };
