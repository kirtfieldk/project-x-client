import React, { useState} from "react";
import Axios from "axios";

const Contact = () => {
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [touched, setTouch] = useState(false);
  const [topicBody, setBody] = useState(false);
  const [loading, setLoading] = useState(false);

  const checkValid = () => {
    setLoading(true);
    if (email.length === 0) return false;
    if (name.length === 0) return false;
    return true;
  };

  const submitForm = async () => {
    if (checkValid()) {
      const values = {
        email,
        name,
        topic
      };
      await Axios.post("/contact", values);
      setSubmit(true);
    }
    console.log("called");
    setLoading(false);
  };
  const renderField = () => {
    return (
      <div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="name"
            className="form-control"
            placeholder="Name Pionner"
            onChange={e => setName(e.target.value)}
          />
          <div className="red small">
            {touched && name.length === 0 ? "Invalid" : ""}
          </div>
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="name@Pionner.com"
            onChange={e => setEmail(e.target.value)}
          />
          <div className="red small">
            {touched && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
              ? "Invalid Email"
              : ""}
          </div>
        </div>
        <div className="form-group" onClick={() => setBody(true)}>
          <label>Shoot Your Shot</label>
          <textarea
            type="text"
            className={topicBody ? "growth form-control" : "form-control "}
            placeholder="Talk To Us"
            onChange={e => setTopic(e.target.value)}
          />
          <div className="red small">
            {touched && topic.length === 0 ? "Invalid" : ""}
          </div>
        </div>
      </div>
    );
  };

  const renderForm = () => {
    if (!submit) {
      return (
        <>
          <div className="spacer" />
          <div className="col-md-6 bg-dark offset-md-3 bg-trans text-yellow big-shadow round">
            <div className="contact-title p-3 ">Contact us!</div>
            <div className="contact-bio">
              We take the time to respond to every email - we love to help our
              community in any way.
            </div>
            <form onSubmit={() => submitForm()}>
              <div className="mt-2">{renderField()}</div>
              <button
                className={
                  loading
                    ? "btn growing-yellow mb-5 offset-6 w-50 mt-3"
                    : "btn btn-success mb-5 offset-6 w-50 mt-3"
                }
                type="submit"
                onClick={e => {
                  e.preventDefault();
                  setTouch(true);
                  submitForm();
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </>
      );
    } else
      return (
        <>
          <div className="spacer" />
          <div className="col-md-6 bg-dark offset-3 pb-5 big-shadow text-yellow round ">
            <div className="contact-title p-3">Contact us!</div>
            <div className="contact-bio text-center">
              We take the time to respond to every email - we love to help our
              community in any way.
            </div>
            <div className="offset-3 col-6 mt-5 text-center">
              We will get back to you as soon as possible {name}!
            </div>
          </div>
        </>
      );
  };

  return <div className="">{renderForm()}</div>;
};

export default Contact;
