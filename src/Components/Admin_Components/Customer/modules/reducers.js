import {
  FETCH_USER_MANAGER,
  ADD_USER_AUTH_REQUEST,
  ADD_USER_AUTH_SUCCESS,
  ADD_USER_AUTH_FAILED,
  EDIT_USER_AUTH_FAILED,
  EDIT_USER_AUTH_SUCCESS,

} from "./constants";

const initialState = {
  listUser: [],
  loading: false,
  data: null,
  err: null,
  editUer: {},
};

const reducerUser = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_MANAGER:
      state.listUser = payload;
      return { ...state };

    case ADD_USER_AUTH_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case ADD_USER_AUTH_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };

    case ADD_USER_AUTH_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };

    case EDIT_USER_AUTH_SUCCESS:
      state.editUer = payload;
      return { ...state };

    case EDIT_USER_AUTH_FAILED:
      state.err = payload;
      return { ...state };
    default:
      return { ...state };
  }
};
export default reducerUser;
