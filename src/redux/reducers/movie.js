import {
  FETCH_MOVIE,
  FETCH_MOVIE_DETAIL,
  FETCH_MOVIE_COMMING,
  FETCH_MOVIE_DETAIL_SHOWTIME,
} from "../constants/movie";

const intitialState = {
  movieList: [],
  movieListComMing: [],
  movieDetail: {},
  movieDetailShowTime: {},
};

const reducer = (state = intitialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIE:
      state.movieList = payload;
      return { ...state };

    case FETCH_MOVIE_COMMING:
      state.movieListComMing = payload;
      return { ...state };

    case FETCH_MOVIE_DETAIL:
      state.movieDetail = payload;
      return { ...state };

    case FETCH_MOVIE_DETAIL_SHOWTIME:
      state.movieDetailShowTime = payload;
      return {...state};
    default:
      return state;
  }
};

export default reducer;
