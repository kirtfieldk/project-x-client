import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../Actions";
// TODO flush out the submit newletter method
const Footer = ({ newsletterLoading, submitNewsletter, SubmitNewsletter }) => {
  const [value, setValue] = useState({ email: "" });
  const [err, setErr] = useState({
    error: "",
    success: ""
  });
  // Checks if the email is valid
  const isValidEmail = () => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = re.test(String(value.email).toLowerCase());

    return isValid;
  };

  const SubmitNewsletterToServer = () => {
    isValidEmail(value)
      ? SubmitNewsletter(value)
      : setErr({
          error: "Invalid Email",
          success: ""
        });
    // return err;
  };

  const renderFooter = () => {
    return (
      <div className="pb-5">
        {/* Titles of both sides */}
        <div className="row">
          <div className="col-sm-6">
            <p className="social ml-3">Connect through our socials</p>
          </div>
          <div className="col-sm-3 offset-1 ">
            <p className="Social">Sign up for our monthly newsletter</p>
          </div>
        </div>
        {/* END OF ROW ONE */}
        <div className="row">
          <div className="col-6 pb-3">
            <i className="fab fa-instagram col-1" />
            <i className="fab fa-twitter col-1" />
            <i className="fab fa-youtube col-1" />
            <i className="fab fa-linkedin-in col-1" />
          </div>
          <div className="col-sm-3 offset-1">
            <div className="row">
              <input
                onChange={e => {
                  setValue({ email: e.target.value });
                  e.preventDefault();
                }}
                type="text"
                className="form-control col-12"
                placeholder="email"
                aria-label="Username"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            <div className="text-danger mt-3 mb-3">{err.error}</div>
            <div className="row ">
              <button
                onClick={e => {
                  e.preventDefault();
                  SubmitNewsletterToServer();
                }}
                className={
                  newsletterLoading
                    ? "btn col-sm-12 text-violet rounded btn-outline-success"
                    : "btn col-sm-12  rounded btn-outline-success"
                }
              >
                Sign Up!
              </button>
            </div>
            {submitNewsletter !== null ? submitNewsletter.msg : ""}
          </div>
        </div>
      </div>
    );
  };

  return <div className=" footer mt-5  sticky-bottom">{renderFooter()}</div>;
};

const mapStateToProps = ({ newsletterLoading, submitNewsletter }) => {
  return { newsletterLoading, submitNewsletter };
};

export default connect(
  mapStateToProps,
  actions
)(Footer);
