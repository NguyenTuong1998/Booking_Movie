import Home from "../Page/HomeTemplate/HomePage/index";
import Detail from "../Page/HomeTemplate/DetailMovie";
import UserManager from "../Page/AdminTemplate/UserManager";
import MovieManager from "../Page/AdminTemplate/MovieManager";
import Booking_Ticket from "../Page/HomeTemplate/Booking_Ticket";
import Profile from "../Page/HomeTemplate/Profile";
// import Customer from "../Components/Customer";
// import Chart from "../Components/Admin_Components/Chart";
const routerHome = [
  {
    exact: true,
    path: "/",
    Component: Home,
  },
  {
    exact: false,
    path: "/detail/:id",
    Component: Detail,
  },
  {
    exact: false,
    path: "/profile",
    Component: Profile,
  },
];
const routerAdmin = [
  {
    exact: true,
    path: "/homeAdmin",
    Component: UserManager,
  },
  {
    exact: false,
    path: "/movieManager",
    Component: MovieManager,
  },
];


export { routerHome, routerAdmin };
