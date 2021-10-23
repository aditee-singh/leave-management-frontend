import "./LandingPage.css";

import axios from "axios";
import { useRef, useState } from "react";
import { useHistory } from "react-router";
import {
  TextField,
  Button,
  FormLabel,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

const Signup = (props) => {
  let history = useHistory();

  const apiUrl = "https://ncs-leave-management.herokuapp.com/api/signup";

  const handleSignup = async (e) => {
    e.preventDefault();
    const user = {
      fullName: name,
      email: email,
      designation: designation,
      department: department,
      phone: phone,
      password: password,
    };

    console.log(user);

    axios
      .post(apiUrl, user)
      .then((res) => {
        console.log(res.data);
        // if (res.data.jwt) {
        //   localStorage.setItem("user", JSON.stringify(res.data));
        //   console.log("Login succesfull");
        // }
        history.push("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [department, setDepartment] = useState(null);
  const [designation, setDesignation] = useState(null);
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleDeptChange = (event) => {
    setDepartment(event.target.value);
  };
  const handleDesigChange = (event) => {
    setDesignation(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className={`login-form ${props.classes}`}>
      <form onSubmit={handleSignup} className="flex flex-column">
        <span className="label">Full Name</span>
        <input
          placeholder="Full Name"
          className="signup-input"
          style={{ width: "400px" }}
          onChange={handleNameChange}
        />
        <div className="flex flex-row">
          <div
            style={{
              marginTop: "15px",
              display: "flex",
              alignItems: "center",
              flexFlow: "row wrap",
            }}
          >
            <span style={{ marginRight: "40px" }}>
              <FormControl>
                <InputLabel id="demo-simple-select-label">
                  Department
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  style={{ width: "182px" }}
                  label="Department"
                  name="department"
                  value={department}
                  onChange={handleDeptChange}
                >
                  <MenuItem value="CSE">CS</MenuItem>
                  <MenuItem value="it">IT</MenuItem>
                  <MenuItem value="ece">ECE</MenuItem>
                  <MenuItem value="ee">EE</MenuItem>
                  <MenuItem value="eee">EEE</MenuItem>
                  <MenuItem value="ce">CE</MenuItem>
                  <MenuItem value="me">ME</MenuItem>
                </Select>
              </FormControl>
            </span>
            <span>
              <FormControl>
                <InputLabel id="demo-simple-select-label">
                  Designation
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  style={{ width: "182px" }}
                  label="Designation"
                  name="designation"
                  value={designation}
                  onChange={handleDesigChange}
                >
                  <MenuItem value="prof">Professor</MenuItem>
                  <MenuItem value="hod">HOD</MenuItem>
                  <MenuItem value="asstprof">Assistant Professor</MenuItem>
                  <MenuItem value="management">Management</MenuItem>
                  <MenuItem value="finance">Finance</MenuItem>
                  <MenuItem value="zzz">Finance</MenuItem>
                </Select>
              </FormControl>
            </span>
          </div>
        </div>
        <span className="label" style={{ paddingTop: "24px" }}>
          E-mail Address
        </span>
        <input
          placeholder="E-mail Address"
          className="signup-input"
          style={{ width: "400px" }}
          onChange={handleEmailChange}
        />
        <span className="label" style={{ paddingTop: "24px" }}>
          Password
        </span>
        <input
          placeholder="Password"
          className="signup-input"
          style={{ width: "400px" }}
          onChange={handlePasswordChange}
        />
        <button className="signup-button" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};

const Login = (props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [updatePassword, setUpdatePassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  let history = useHistory();

  const apiUrl = "https://ncs-leave-management.herokuapp.com/api/login";

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    console.log(user);

    axios
      .post(apiUrl, user)
      .then((res) => {
        //console.log(res);
        console.log(res.data);
        if (res.data.jwt) {
          localStorage.setItem("userToken", JSON.stringify(res.data));
          localStorage.setItem("userData", JSON.stringify(res.data.data));
          console.log("Login succesfull");
          history.push("/profile");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleForgotPassword = (e) => {
    setUpdatePassword(true);
  };

  return (
    <div className={`login-form ${props.classes}`}>
      <form onSubmit={handleLogin} className="flex flex-column">
        <span className="label" style={{ color: "##1a73e8" }}>
          Email Address
        </span>
        <input
          placeholder="Email Address"
          className="input"
          style={{ width: "400px" }}
          onChange={handleEmailChange}
        />
        <span className="label" style={{ paddingTop: "24px" }}>
          Password
        </span>
        <input
          placeholder="Password"
          className="input"
          style={{ width: "400px" }}
          onChange={handlePasswordChange}
        />
        <div className="flex flex-row forgot">
          <span>
            <label class="container">
              Remember Me
              <input type="checkbox" checked="checked" />
              <span class="checkmark"></span>
            </label>
          </span>
          <span
            style={{ fontSize: "16px", color: "#1A73E8" }}
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </span>
        </div>
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

const UpdatePassword = () => {
  return (
    <div class="login-form flex flex-column" style={{ maxWidth: "400px" }}>
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
    <div class="login-form flex flex-column" style={{ maxWidth: "400px" }}>
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
        <label class="container">
          Remember Me
          <input type="checkbox" checked="checked" />
          <span class="checkmark"></span>
        </label>
      </span>
      <button className="login-button" type="submit">
        Reset Password
      </button>
    </div>
  );
};

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="root-div">
      <div className="header">
        <div className={`flex flex-row`}>
          <span
            className={`login ${
              showLogin
                ? "border-primary font-primary"
                : "border-secondary font-secondary"
            } `}
            onClick={() => setShowLogin(true)}
            style={{ width: "200px" }}
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
            style={{ width: "200px" }}
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
  );
};

export default LandingPage;
