import React from "react";
import "./util/Loading/style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routerAdmin, routerHome } from "./router/index";
import HomeTemplate from "./Page/HomeTemplate";
import Singup from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import PageNotFound from "./Page/PageNotFound";
import AdminTemplate from "./Page/AdminTemplate";
import SignInAuth from "./Page/AdminTemplate/Auth/index";
import BookingTicket from "./Page/HomeTemplate/Booking_Ticket";
function App() {
  const showLayOutHome = (router) => {
    if (router && router.length > 0) {
      return router.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.Component}
          />
        );
      });
    }
  };
  const showLayOutAdmin = (router) => {
    if (router && router.length > 0) {
      return router.map((item, index) => {
        return (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.Component}
          />
        );
      });
    }
  };
  return (
    <BrowserRouter>
      <Switch>
        {showLayOutHome(routerHome)}
        {showLayOutAdmin(routerAdmin)}
        <Route path="/detail-ticketroom/:maLC" component={BookingTicket} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={Singup} />

        <Route path="/auth" component={SignInAuth} />
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
