import "./LandingPage.css";
import axios from "axios";
import { useRef, useState } from "react";
import { useHistory } from "react-router";

const Signup = (props) => {
  const nameRef = useRef();
  const desigRef = useRef();
  const deptRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const apiUrl = "https://ncs-leave-management.herokuapp.com/api/signup";

  const handleSignup = async (e) => {
    e.preventDefault();
    const user = {
      fullName: nameRef.current.value,
      email: emailRef.current.value,
      designation: desigRef.current.value,
      department: deptRef.current.value,
      phone: phoneRef.current.value,
      password: passwordRef.current.value,
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const UpdatePassword = (props) => {
    return <div></div>;
  };

  return (
    <div
      className={`flex w-80 self-center flex-column justify-center ${props.classes}`}
    >
      <form onSubmit={handleSignup} className="flex flex-column">
        <input type="text" placeholder="Full Name" ref={nameRef} />
        <div className="flex flex-row justify-between">
          <select name="designation" id="desig" ref={desigRef}>
            <option>Designation</option>
            <option value="hod">Head of Department</option>
            <option value="prof">Professor</option>
            {/* <input type="submit" value="Submit" /> */}
          </select>
          <select name="department" id="dept" ref={deptRef}>
            <option>Department</option>
            <option value="cse">CSE</option>
            <option value="abcd">Abcd</option>
            {/* <input type="submit" value="Submit" /> */}
          </select>
        </div>

        <input type="text" placeholder="Phone no." ref={phoneRef} />
        <input type="text" placeholder="Email Address" ref={emailRef} />
        <input type="text" placeholder="Password" ref={passwordRef} />
        <button className="w-80 self-center btn mh-10">Signup</button>
      </form>
    </div>
  );
};

const Login = (props) => {
  const nameRef = useRef();
  const passwordRef = useRef();

  let history = useHistory();

  const apiUrl = "https://ncs-leave-management.herokuapp.com/api/login";

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = {
      email: nameRef.current.value,
      password: passwordRef.current.value,
    };

    axios
      .post(apiUrl, user)
      .then((res) => {
        //console.log(res);
        console.log(res.data.jwt);
        if (res.data.jwt) {
          localStorage.setItem("user", JSON.stringify(res.data));
          console.log("Login succesfull");
          history.push("/profile");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //const handleLogout = async (e) => {
  //     localStorage.removeItem("user");
  //     console.log("Logout successfull");
  //   };

  return (
    <div
      className={`flex w-80 self-center flex-column justify-center ${props.classes}`}
    >
      <form onSubmit={handleLogin} className="flex flex-column">
        <input type="text" placeholder="Email Address" ref={nameRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <div className="flex w-80 self-center flex-row justify-between mh-10">
          <span>Remember me</span>
          <span>Forgot Password</span>
        </div>
        <button className="w-80 self-center btn mh-10">Login</button>
      </form>
    </div>
  );
};

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="root-div flex flex-column">
      <div className="flex flex-row mb-40">
        <span
          className={`w-50 ph-20 ${showLogin ? "bb" : ""}`}
          onClick={() => setShowLogin(true)}
        >
          Login
        </span>
        <span
          className={`w-50 ph-20 ${!showLogin ? "bb" : ""}`}
          onClick={() => setShowLogin(false)}
        >
          Signup
        </span>
      </div>
      <Signup classes={showLogin ? "dn" : ""} />
      <Login classes={!showLogin ? "dn" : ""} />
    </div>
  );
};

export default LandingPage;
