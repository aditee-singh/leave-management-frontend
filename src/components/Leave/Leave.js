import {
  FormControlLabel,
  FormLabel,
  RadioGroup,
  FormControl,
  TextField,
  Radio,
  Button,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker } from "@mui/lab";
import { useState } from "react";
import Substitution from "./Substitution/Substitution";

import "./Leave.css";
import axios from "axios";

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

const Leave = (props) => {
  const [fromDate, setFromDate] = useState(new Date(), null);
  const [toDate, setToDate] = useState(new Date(), null);

  const [formValues, setFormValues] = useState([
    { subject: "", date: "", time: "", substituteFaculty: "", email: "" },
  ]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const finalFormValues = [];
    const userData = JSON.parse(localStorage.getItem("userData"));
    const userID = userData._id;

    for (let f of formValues) {
      finalFormValues.push({
        substituteFaculty: f.substituteFaculty,
        data: {
          date: formatDate(f.date),
          time: new Date(f.time).toTimeString().split(" ")[0],
          subject: f.subject,
          email: f.email,
          sustituteOf: userID,
        },
      });
    }
    const data = {
      leaveRequestFor: evt.target.leave.value,
      leaveType: evt.target.leave.value,
      duration: evt.target.dayLength.value,
      startDate: formatDate(fromDate),
      endDate: formatDate(toDate),
      reason: evt.target.reason.value,
      substituteClasses: finalFormValues,
    };
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    console.log(data);
    axios({
      url: "https://ncs-leave-management.herokuapp.com/api/leave-application",
      method: "post",
      data: data,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${userToken.jwt}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })

      .catch((e) => {
        console.log(e);
      });
    console.log(JSON.stringify(data));
  };
  return (
    <div className="leave1 flex flex-column">
      <h2
        style={{
          margintop: "44px",
          fontWeight: "600",
          fontSize: "28px",
          lineHeight: "34px",
        }}
      >
        Apply for Leave
      </h2>
      <div>
        <span
          style={{
            paddingTop: "44px",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "21px",
          }}
        >
          <b>Leave Address:&nbsp;</b>
          <span style={{ color: "#1a73e8" }}>{props.name}</span>
        </span>
      </div>
      <form name="tox" id="my-form-id" onSubmit={handleSubmit}>
        <FormControl component="fieldset">
          <div style={{ paddingTop: "36px" }}>
            <FormLabel component="legend" className="text-primary">
              Apply Leave For:{" "}
            </FormLabel>
            <RadioGroup row aria-label="leave" name="leave">
              <FormControlLabel
                value="casual"
                className="leave-label"
                control={<Radio required={true} />}
                label="Casual Leave"
                style={{ fontSize: "16px" }}
              />
              <FormControlLabel
                value="earned"
                className="leave-label"
                control={<Radio required={true} />}
                label="Earned Leave"
              />
              <FormControlLabel
                value="semester"
                className="leave-label"
                control={<Radio required={true} />}
                label="Semester Break"
              />
            </RadioGroup>
          </div>
          <div>
            <FormLabel component="legend" style={{ paddingTop: "40px" }}>
              Duration:{" "}
            </FormLabel>
            <RadioGroup row aria-label="duration" name="dayLength" required>
              <FormControlLabel
                value="halfday"
                className="leave-label"
                control={<Radio required={true} />}
                label="Half Day"
              />
              <FormControlLabel
                value="fullday"
                className="leave-label"
                control={<Radio required={true} />}
                label="Full Day"
              />
            </RadioGroup>
          </div>
          <div className="date" style={{ paddingTop: "40px" }}>
            <p
              style={{
                marginRight: "38px",
                color: "gray",
              }}
              className="text-primary"
            >
              Date
            </p>
            <p
              style={{
                marginRight: "230px",
              }}
              className="text-primary"
            >
              From
            </p>
            <p className="text-primary">To</p>
          </div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className="flex flex-row">
              <span style={{ marginLeft: "65px" }}>
                <DatePicker
                  value={fromDate}
                  onChange={(newValue) => {
                    setFromDate(newValue);
                  }}
                  InputProps={{ readOnly: true }}
                  disablePast
                  renderInput={(params) => <TextField {...params} />}
                  format="dd-mm-yyyy"
                  // formatDate={(date) => moment(date).format("DD-MM-YYYY")}
                />
              </span>
              <span style={{ marginLeft: "35px" }}>
                <DatePicker
                  value={toDate}
                  disablePast
                  onChange={(newValue) => {
                    setToDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  required
                />
              </span>
            </div>
          </LocalizationProvider>

          <div>
            <FormLabel component="legend" style={{ paddingTop: "36px" }}>
              <span
                style={{
                  color: "black",
                }}
                className="text-primary"
              >
                Reason:
              </span>
            </FormLabel>
            <TextField
              name="reason"
              id="text"
              type="text"
              placeholder="Type your reason here..."
              required
              style={{ width: "1040px" }}
            />
          </div>
          <div style={{ marginTop: "36px" }}>
            <h3 style={{ fontWeight: "500" }}>Substitue for classes</h3>
            <Substitution
              formValues={formValues}
              setFormValues={setFormValues}
            />
          </div>
          <Button
            variant="contained"
            type="submit"
            style={{
              marginTop: "10px",
              height: "53px",
              width: "216px",
              marginBottom: "20px",
              // paddingLeft: "100px",
              // paddingRight: "100px",
              // //paddingTop: "10px",
              // //paddingBottom: "10px",
            }}
          >
            Submit Application
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

export default Leave;
