import "./LandingPage.css";
import { useState } from "react";
import { useHistory } from "react-router";
import { postRequest } from "./../../helpers/backend_requests";

const apiLoginEndpoint = "/api/login";


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
    const handleForgotPassword = (e) => {
        setUpdatePassword(true);
    };
    
    let history = useHistory();
    
    const handleLogin = async (e) => {

        e.preventDefault();
        const data = {
        email: email,
        password: password,
        };
        console.log('data sending to backend: ',data);
        
        let res = await postRequest({apiUrlEndpoint: apiLoginEndpoint, data});
      
        if (res) {
            console.log('data received after user logged in: ',res.data);
            if (res.data.jwt) {
                localStorage.setItem("userToken", JSON.stringify(res.data));
                localStorage.setItem("userData", JSON.stringify(res.data.data));
                history.push("/dashboard");
            }
        } else {
            alert('Either the email or password is incorrect.');
            history.push("/");
        }
      
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
            type="email"
            onChange={handleEmailChange}
          />
          <span className="label" style={{ paddingTop: "24px" }}>
            Password
          </span>
          <input
            placeholder="Password"
            className="input"
            type="password"
            style={{ width: "400px" }}
            onChange={handlePasswordChange}
          />
          <div className="flex flex-row forgot">
            <span>
              <label className="container">
                Remember Me
                <input type="checkbox" checked="checked" readOnly />
                <span className="checkmark"></span>
              </label>
            </span>
            <span
              style={{ fontSize: "16px", color: "#1A73E8" }}
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </span>
          </div>
          <button className="login-button" type="submit" style={{cursor: "pointer"}}>
            Login
          </button>
        </form>
      </div>
    );
  };

export default Login;