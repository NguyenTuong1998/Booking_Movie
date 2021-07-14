import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
function LayoutAdmin(props) {
  return (
    <>
      {/* <HeaderAdmin/> */}

      {props.children}
    </>
  );
}

function AdminTemplate({ Component, ...props }) {
  if (!sessionStorage.getItem("UserAdmin")) return <Redirect to="/auth" />;
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <LayoutAdmin>
          <Component {...propsComponent} />
        </LayoutAdmin>
      )}
    />
  );
}

export default AdminTemplate;
