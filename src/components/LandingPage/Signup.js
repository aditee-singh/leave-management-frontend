import "./LandingPage.css";

import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { postRequest } from "../../helpers/backend_requests";

const apiSignupEndpoint = "/api/signup";

const Signup = (props) => {
  
    let history = useHistory();
  
    const [department, setDepartment] = useState('it');
    const [designation, setDesignation] = useState('prof');
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
  
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

        console.log('data sending for signup: ',user);
        
        let res = await postRequest({apiUrlEndpoint: apiSignupEndpoint, data: user})

        if (res) {
            console.log('data received after signup: ', res);
            alert('Signup success!');
            window.location.reload();
        } else {
            alert('unable to signup');
            history.push("/");
        }

    };
  
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
            type="email"
            style={{ width: "400px" }}
            onChange={handleEmailChange}
          />
          <span className="label" style={{ paddingTop: "24px" }}>
            Password
          </span>
          <input
            placeholder="Password"
            type="password"
            className="signup-input"
            style={{ width: "400px" }}
            onChange={handlePasswordChange}
          />
          <span className="label" style={{ paddingTop: "24px" }}>
            Phone Number
          </span>
          <input
            placeholder="Password"
            className="signup-input"
            type="number"
            style={{ width: "400px" }}
            onChange={handlePhoneChange}
          />
          <button className="signup-button" type="submit" style={{cursor: "pointer"}}>
            Signup
          </button>
        </form>
      </div>
    );
  };

export default Signup;