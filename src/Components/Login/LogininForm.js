import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../Actions";

const LogininForm = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(props.loginToken);

  const submitValues = () => {
    //   Value to be submitted
    const userInfo = {
      email,
      password
    };
    props.logIn(userInfo);
  };

  const renderForm = () => {
    return (
      <div className="mt-5 col-5 offset-3 bg-secondary border rounded-lg shadow">
        <h3 className="text-center text-lg pt-3">Login</h3>
        <form
          onSubmit={e => {
            e.preventDefault();
            submitValues(e);
          }}
        >
          <div className="form-group mt-5">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-3 pb-5 border-bottom">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
            <small
              className={
                props.loading
                  ? "text-info mt-3 text-center form-text"
                  : "text-danger mt-3 text-center form-text"
              }
            >
              {props.loading ? "Loading" : props.loginToken.err}
            </small>
          </div>
          <button
            type="submit"
            className={
              props.loading
                ? "btn btn-outline-success offset-9 mt-2 mb-3 col-3 disable"
                : "btn btn-outline-success offset-9 mt-2 mb-3 col-3"
            }
          >
            Login
          </button>
        </form>
      </div>
    );
  };
  return <div>{renderForm()}</div>;
};
const mapStateToProps = ({ loginToken, loading }) => {
  return {
    loginToken,
    loading
  };
};
export default connect(
  mapStateToProps,
  actions
)(LogininForm);
