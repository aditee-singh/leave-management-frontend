import "./UserProfile.css";

import {
  FormControl,
  FormLabel,
  TextField,
  Button,
} from "@mui/material";

import { putRequest } from "../../helpers/backend_requests";
import { useHistory } from "react-router";

const passwordResetUrl = '/api/change-password';


const PasswordReset = () => {

    let history = useHistory();

    const handleSubmit = (evt) => {
      evt.preventDefault();
  
      const userData = JSON.parse(localStorage.getItem("userData"));

      const data = {
        email: userData.email,
        password: evt.target.oldpass.value,
        newPassword: evt.target.newpass.value
      };

      console.log(data);

  
      putRequest({apiUrlEndpoint: passwordResetUrl, data: data})
        .then((res) => {
          history.push("/profile");
        }).catch((e) => {
          console.log(e);
          alert('Unable to update profile');
        })
      
    };
  
    return (
        <form name="tox2" id="my-form-id2" onSubmit={handleSubmit}>
          <span style={{ fontSize: "18px", fontWeight: "500" }}>
            {" "}
            Change Password{" "}
          </span>
          <p style={{ color: "gray", fontWeight: "300", fontSize: "13px" }}>
            {" "}
            The password should be 6 character long{" "}
          </p>
          <FormControl component="fieldset">
            <div style={{ marginTop: "15px" }}>
              <FormLabel component="legend">
                <b className="text-primary" style={{ color: "black" }}>
                  Old Password
                </b>
              </FormLabel>
              <TextField
                name="oldpass"
                id="text"
                type="password"
                size="small"
                required
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
              <span style={{ marginRight: "40px" }}>
                <FormLabel component="legend">
                  <b className="text-primary" style={{ color: "black" }}>
                    New Password
                  </b>
                </FormLabel>
                <TextField
                  name="newpass"
                  id="text"
                  type="password"
                  size="small"
                  required
                  style={{ width: "480px" }}
                />
              </span>
              
            </div>

            <Button
              variant="contained"
              type="submit"
              style={{
                marginTop: "36px",
                marginBottom: "20px",
                width: "15rem",
              }}
            >{" "}
              Reset Password
            </Button>
          </FormControl>
        </form>
    );
}

export default PasswordReset;