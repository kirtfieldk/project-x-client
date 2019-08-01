import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
const ProtectRoute = ({ component: Component, loginToken, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        loginToken !== false ? <Component {...props} /> : <Redirect to="/admin" />
      }
    />
  );
};
const mapStateToProps = ({ loginToken }) => {
  return loginToken;
};
export default connect(mapStateToProps)(ProtectRoute);
