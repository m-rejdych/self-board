import { NEWS_FEED } from '../constans';

const initialState = {
  newsFeed: [],
  loading: false,
  error: null,
};

const newsFeedReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case NEWS_FEED.LOAD_NEWS:
      return { ...state, loading: true };
    case NEWS_FEED.LOAD_NEWS_SUCCESS:
      return { newsFeed: payload, loading: false, error: null };
    case NEWS_FEED.LOAD_NEWS_FAIL:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default newsFeedReducer;
