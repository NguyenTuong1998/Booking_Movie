import {
  FETCH_MOVIE_AUTH,
  ADD_MOVIE_AUTH_REQUEST,
  ADD_MOVIE_AUTH_SUCCESS,
  ADD_MOVIE_AUTH_FAILED,
  EDIT_MOVIE_AUTH_SUCCESS,
  EDIT_MOVIE_AUTH_FAILED,
} from "./constants";

const init = {
  listMovie: [],
  loading: false,
  data: null,
  err: null,
  editMovie: {},
};
const reducerMovieAuth = (state = init, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIE_AUTH:
      state.listMovie = payload;
      return { ...state };

    case ADD_MOVIE_AUTH_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case ADD_MOVIE_AUTH_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };

    case ADD_MOVIE_AUTH_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };
    case EDIT_MOVIE_AUTH_SUCCESS:
      state.editMovie = payload;
      return { ...state };

    case EDIT_MOVIE_AUTH_FAILED:
      state.err = payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default reducerMovieAuth;
