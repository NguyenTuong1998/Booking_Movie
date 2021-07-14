import React from "react";
import { Route } from "react-router-dom";
import Footer from "../../util/Footer";
import Header from "../../util/Header";
function LayoutHome(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer/>
    </>
  );
}

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <LayoutHome>
          <Component {...propsComponent} />
        </LayoutHome>
      )}
    />
  );
}
