import "./LandingPage.css";

import axios from "axios";
import { useRef, useState } from "react";
import { useHistory } from "react-router";
import { TextField, Button, FormLabel, MenuItem, Select, FormControl, InputLabel } from "@mui/material";

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
        history.push('/profile');
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
    <div
      className={`w-80 self-center flex-column justify-center ${props.classes}`}
    >
      <form onSubmit={handleSignup} className="flex flex-column">
          <FormLabel component="legend" style={{"marginTop": "20px"}} ><b>Full Name</b> </FormLabel>
          <TextField name="name" id="text"  onChange={handleNameChange} type="text"  required />

          <div className="flex flex-row">
          <div style={{marginTop: "15px", display:"flex", alignItems: "center", flexFlow: "row wrap"}} >
                        <span style={{marginRight: "40px"}}>
                            {/* <FormLabel component="legend" ><b>Department</b> </FormLabel>
                            <TextField name="department" id="text" type="text" required style={{width:"300px"}}/> */}
                            <FormControl>
                            <InputLabel id="demo-simple-select-label">Department</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                style={{width:"150px"}}
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
                            {/* <FormLabel component="legend" ><b>Designation</b> </FormLabel>
                            <TextField name="designation" id="text" type="text" required style={{width:"300px"}}/>    */}

                            <FormControl>
                                <InputLabel id="demo-simple-select-label">Designation</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    style={{width:"150px"}}
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

          <FormLabel component="legend" style={{"marginTop": "20px"}} ><b>Phone Number</b> </FormLabel>
          <TextField name="phone" id="text"  onChange={handlePhoneChange} type="text"  required />

          <FormLabel component="legend" style={{"marginTop": "20px"}} ><b>Email</b> </FormLabel>
          <TextField name="email" id="text"  onChange={handleEmailChange} type="text"  required />
                   
          <FormLabel component="legend" style={{"marginTop": "20px"}}  ><b>Password</b> </FormLabel>
          <TextField name="password" id="text" type="password" onChange={handlePasswordChange}  required />
                   
          <Button variant="contained" type="submit" style={{"marginTop": "20px", "marginBottom": "10px"}} > Sign Up</Button>

      </form>
    </div>
  );
};

const Login = (props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

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

  //const handleLogout = async (e) => {
  //     localStorage.removeItem("user");
  //     console.log("Logout successfull");
  //   };


  return (
    <div
      className={`flex-column justify-center ${props.classes}`}
    >
      <form onSubmit={handleLogin} className="flex flex-column">
          <FormLabel component="legend" style={{"marginTop": "20px"}} ><b>Email</b> </FormLabel>
          <TextField name="name" id="text"  type="text"  onChange={handleEmailChange} required />
                   
          <FormLabel component="legend" style={{"marginTop": "20px"}}  ><b>Password</b> </FormLabel>
          <TextField name="name" id="text" type="password"  onChange={handlePasswordChange} required />
                   
          <Button variant="contained" type="submit" style={{"marginTop": "20px", "marginBottom": "50px"}} > Login</Button>

      </form>
    </div>
  
  );

};

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="root-div flex flex-column">
      <div className="flex flex-row ">
        <span
          className={` w-50 ph-20 ${showLogin ? "bb" : ""} `}
          onClick={() => setShowLogin(true)}
        >
          Login
        </span>
        <span
          className={` w-50 ph-20 ${showLogin ? "" : "bb"}`}
          onClick={() => setShowLogin(false)}
        >
          Signup
        </span>
      </div>
      <Signup classes={showLogin ? "dn" : "flex"} />
      <Login classes={showLogin ? "flex" : "dn"} />
    </div>
  );
};

export default LandingPage;
