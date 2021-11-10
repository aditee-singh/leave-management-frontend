import "./LandingPage.css";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="landing-page">
      <div className={`root-div ${showLogin ? "top2" : "top1"}`}>
        <div className="header">
          <div className={`flex flex-row`}>
            <span
              className={`login ${
                showLogin
                  ? "border-primary font-primary"
                  : "border-secondary font-secondary"
              } `}
              onClick={() => setShowLogin(true)}
              style={{ width: "200px", cursor: "pointer" }}
            >
              Login
            </span>
            <span
              className={`signup ${
                !showLogin
                  ? "border-primary front-primary"
                  : "border-secondary font-secondary"
              } `}
              onClick={() => setShowLogin(false)}
              style={{ width: "200px", cursor: "pointer" }}
            >
              Signup
            </span>
          </div>
          <Signup classes={showLogin ? "dn" : "flex"} />
          <Login classes={showLogin ? "flex" : "dn"} />
          {/* <UpdatePassword />
        <ResetPassword /> */}
        </div>
      </div>
    </div>
  );
};

const UpdatePassword = () => {
  return (
    <div className="login-form flex flex-column" style={{ maxWidth: "400px" }}>
      <h1 style={{ fontWeight: "500", fontSize: "24px" }}>Forgot Password</h1>
      <p>
        Enter your e-mail address below, and we'll send you an e-mail allowing
        you to reset it.
      </p>
      <span className="label" style={{ color: "##1a73e8", marginTop: "36px" }}>
        Email Address
      </span>
      <input
        placeholder="Email Address"
        className="input"
        style={{ width: "400px" }}
      />
      <button className="login-button" type="submit">
        Get Email
      </button>
    </div>
  );
};

const ResetPassword = () => {
  return (
    <div className="login-form flex flex-column" style={{ maxWidth: "400px" }}>
      <h1 style={{ fontWeight: "500", fontSize: "24px" }}>Forgot Password</h1>
      <p>Password should be atleast 6 characters</p>
      <span className="label" style={{ color: "##1a73e8", marginTop: "36px" }}>
        New Password
      </span>
      <input
        placeholder="New Password"
        className="input"
        style={{ width: "400px" }}
      />
      <span className="label" style={{ color: "##1a73e8", marginTop: "36px" }}>
        Reset Password
      </span>
      <input
        placeholder="Reset Password"
        className="input"
        style={{ width: "400px" }}
      />
      <span style={{ marginTop: "15px" }}>
        <label className="container">
          Remember Me
          <input type="checkbox" checked="checked" />
          <span className="checkmark"></span>
        </label>
      </span>
      <button className="login-button" type="submit">
        Reset Password
      </button>
    </div>
  );
};

export default LandingPage;
