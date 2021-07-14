import { combineReducers } from "redux";
import movie from "./movie";
import addUserReducer from "../../Components/SignUp/module/movie";
import authReducers from "../../Components/SignIn/module/reducers";
import { ShowTimeReducer} from "../../Components/ShowTimes/module/reducer";
import authReducerAdmin from "../../Page/AdminTemplate/Auth/modules/reducers";
import reducerUser from "../../Components/Admin_Components/Customer/modules/reducers";
import reducerMovieAuth from "../../Components/Admin_Components/Movie/modules/reudcers";
import fetchMaLichChieuReducer from "../../Page/HomeTemplate/Booking_Ticket/modules/reducer"
import chooseSeatReducer from "../../Components/SeatItem/modules/reducer";
const reducer = combineReducers({
  // literal object
  movie,
  ShowTimeReducer,
  addUserReducer,
  authReducers,
  authReducerAdmin,
  reducerUser,
  reducerMovieAuth,
  fetchMaLichChieuReducer,
  chooseSeatReducer,
});

export default reducer;