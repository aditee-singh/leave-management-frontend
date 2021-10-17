import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ sideNav: SideNav, component: Component, ...rest }) => {
  let userLoggedIn;
  try {
    userLoggedIn = localStorage.getItem("userToken").length > 10 ? 1 : 0;
  } catch (e) {
    userLoggedIn = 0;
  }

  return (
    <Route
      {...rest}
      render={props =>
        userLoggedIn === 1 ? (
        <> 
          <SideNav />
          <Component {...props} />
        </>
        ) : (
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired
};

export default PrivateRoute;
