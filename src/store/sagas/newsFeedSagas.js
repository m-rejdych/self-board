import axios from 'axios';
import { NEWS_FEED } from '../constans';
import { put, takeEvery } from 'redux-saga/effects';
import { loadNewsSuccess, loadNewsFail } from '../actions';

function* handleLoadNews(action) {
  try {
    const url =
      'http://newsapi.org/v2/top-headlines?country=us&apiKey=c6b68bf26c8c45558d70c4eca273cdc2';
    const response = yield axios.get(url);
    const newsFeed = response.data.articles
      .filter((item) => item.urlToImage && item.author)
      .slice(0, 12);
    yield put(loadNewsSuccess(newsFeed));
  } catch (error) {
    yield put(loadNewsFail(error));
  }
}

function* setLoadNews() {
  yield takeEvery(NEWS_FEED.LOAD_NEWS, handleLoadNews);
}

export { setLoadNews };
