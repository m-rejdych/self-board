import { NEWS_FEED } from '../constans';

const loadNews = () => ({
  type: NEWS_FEED.LOAD_NEWS,
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
