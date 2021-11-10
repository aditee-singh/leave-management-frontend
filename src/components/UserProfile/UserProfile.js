import "./UserProfile.css";

import {
  FormControl,
  FormLabel,
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router";
import { putRequestWithToken } from "../../helpers/backend_requests";
import PasswordReset from "./PasswordReset";

const UserProfile = () => {
  let history = useHistory();

  const userData = JSON.parse(localStorage.getItem("userData"));

  const [fullName, setFullName] = useState(userData.fullName);
  const [department, setDepartment] = useState(userData.department);
  const [designation, setDesignation] = useState(userData.designation);
  const [email, setEmail] = useState(userData.email);
  const [phone, setPhone] = useState(userData.phone);

  const handleDeptChange = (event) => {
    setDepartment(event.target.value.toLowerCase());
  };
  const handleDesigChange = (event) => {
    setDesignation(event.target.value.toLowerCase());
  };
  const handleNameChange = (event) => {
    setFullName(event.target.value.toLowerCase());
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value.toLowerCase());
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const user = {};
    if (evt.target.name.value) user["fullName"] = evt.target.name.value;
    if (evt.target.department.value) {
      user["department"] = evt.target.department.value;
    }
    if (evt.target.designation.value) {
      user["designation"] = evt.target.designation.value;
    }
    if (evt.target.email.value) {
      user["email"] = evt.target.email.value;
    }
    if (evt.target.phone.value) {
      user["phone"] = evt.target.phone.value;
    }
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const apiUrlEndpoint = "/api/update-user";
    const token = userToken.jwt;

    putRequestWithToken({ apiUrlEndpoint, data: user, token })
      .then((res) => {
        localStorage.setItem("userData", JSON.stringify(res.data.data));
        console.log("data received after update profile", res.data.data);
        history.push("/profile");
      })
      .catch((e) => {
        console.log(e);
        alert("Unable to update profile");
      });
  };

  return (
    <div className="userprofile flex flex-column">
      <div>
        <form name="tox" id="my-form-id" onSubmit={handleSubmit}>
          <h2
            style={{ fontWeight: "600", fontSize: "28px", lineHeight: "34px" }}
          >
            Profile
          </h2>

          <FormControl component="fieldset">
            <div style={{ marginTop: "15px" }}>
              <FormLabel component="legend">
                <b className="text-primary">Full Name</b>
              </FormLabel>
              <TextField
                name="name"
                id="text"
                type="text"
                placeholder={fullName}
                onChange={handleNameChange}
                size="small"
                style={{ width: "480px" }}
              />
            </div>
            <div
              style={{
                marginTop: "24px",
                display: "flex",
                alignItems: "center",
                flexFlow: "row wrap",
              }}
            >
              <span style={{ marginRight: "24px" }}>
                {/* <p className="text-primary">Department</p> */}

                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Department
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{ width: "228px", height: "42px" }}
                    label="Department"
                    name="department"
                    value={department ? department.toLowerCase() : ""}
                    onChange={handleDeptChange}
                  >
                    <MenuItem value="cse">CS</MenuItem>
                    <MenuItem value="it">IT</MenuItem>
                    <MenuItem value="ece">ECE</MenuItem>
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
                    style={{ width: "228px", height: "42px" }}
                    label="Designation"
                    name="designation"
                    value={designation}
                    onChange={handleDesigChange}
                    readOnly
                  >
                    <MenuItem value="student">Student</MenuItem>
                    <MenuItem value="faculty">Faculty</MenuItem>
                    <MenuItem value="hod">HOD</MenuItem>
                    <MenuItem value="management">Management</MenuItem>
                    <MenuItem value="finance">Finance</MenuItem>
                    <MenuItem value="zzz">Finance</MenuItem>
                  </Select>
                </FormControl>
              </span>
            </div>
            <div style={{ marginTop: "24px" }}>
              <FormLabel component="legend">
                <b className="text-primary">Email Address</b>
              </FormLabel>
              <TextField
                name="email"
                id="text"
                type="email"
                size="small"
                placeholder={email}
                onChange={handleEmailChange}
                style={{ width: "480px" }}
              />
            </div>
            <div style={{ marginTop: "15px" }}>
              <FormLabel component="legend">
                <b className="text-primary">Phone Number</b>
              </FormLabel>
              <TextField
                name="phone"
                id="text"
                type="text"
                size="small"
                placeholder={phone}
                onChange={handlePhoneChange}
                style={{ width: "480px" }}
              />
            </div>
            <Button
              variant="contained"
              type="submit"
              style={{ marginTop: "20px", width: "194px", height: "53px" }}
            >
              {" "}
              Edit Profile
            </Button>
          </FormControl>
        </form>
      </div>
      <span
        style={{
          display: "flex",
          height: "5px",
          width: "60px",
          backgroundColor: "lightgray",
          borderRadius: "3px",
          marginTop: "24px",
          marginBottom: "24px",
        }}
      >
        &nbsp;
      </span>
      <div>
        <PasswordReset />
      </div>
    </div>
  );
};

export default UserProfile;
