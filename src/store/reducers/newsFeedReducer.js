import { NEWS_FEED } from '../constans';

const initialState = {
  newsFeed: [],
  loading: false,
  error: null,
};

const newsFeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_FEED.LOAD_NEWS:
      return { ...state, loading: true };
    case NEWS_FEED.LOAD_NEWS_SUCCESS:
      return { newsFeed: action.payload, loading: false, error: null };
    case NEWS_FEED.LOADN_NEWS_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default newsFeedReducer;
