import "./Substitution.css";
import {
  FormLabel,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { useState, useEffect } from "react";
import { getRequest } from "../../../helpers/backend_requests";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker, TimePicker } from "@mui/lab";

const endpointForSubject = "/api/subject";
const endpointAllFaculties = "/api/all-user";

const Substitution = ({ formValues, setFormValues }) => {
  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([
      ...formValues,
      { subject: "", date: "", time: "", substituteFaculty: "", email: "" },
    ]);
  };

  // const [subject, setSubject] = useState('');

  // const handleSubjChange = (event) => {
  //   setSubject(event.target.value);
  // };

  // const [substituteFaculty, setSubstituteFaculty] = useState('');

  // const handleFacultyChange = (event) => {
  //   setSubstituteFaculty(event.target.value);
  // };

  const [selectSubjOptions, setSelectSubjOptions] = useState([]);
  const [selectFacultyOptions, setSelectFacultyOptions] = useState([]);

  useEffect(() => {
    Promise.all([
      getRequest({ apiUrlEndpoint: endpointForSubject }),
      getRequest({ apiUrlEndpoint: endpointAllFaculties }),
    ])
      .then((res) => {
        setSelectSubjOptions(res[0].data?.data);
        setSelectFacultyOptions(res[1].data?.data);
      })
      .catch((error) => console.log("error in dashboard: ", error));
  }, []);

  return (
    <div style={{ border: "1px solid gray", borderRadius: "5px" }}>
      {formValues.map((element, index) => (
        <div
          className="substitute"
          style={{
            padding: "5px",
            marginTop: "5px",
          }}
        >
          <span className="substituionFlex">
            <FormLabel component="legend"> </FormLabel>
          </span>
          <span className="substituionFlex">
            <p style={{ marginLeft: "24px" }}>Subject</p>
            <FormControl style={{ marginLeft: "24px" }}>
              <InputLabel id="subject-select-input-label">Subject</InputLabel>
              <Select
                id="subject-select-label"
                value={element.subject || ""}
                label="Subject"
                onChange={(newValue) => {
                  let newFormValues = [...formValues];
                  newFormValues[index]["subject"] = newValue.target.value;
                  setFormValues(newFormValues);
                }}
                style={{
                  height: "56px",
                  width: "182px",
                  marginRight: "10px",
                }}
              >
                {selectSubjOptions.map((row) => (
                  <MenuItem key={row._id} value={row.subjectName}>
                    {row.subjectName + " " + row.subjectCode}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </span>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <span className="substituionFlex" style={{ marginRight: "10px" }}>
              <DatePicker
                label="Date"
                name="date"
                style={{ marginRight: "10px" }}
                value={element.date || ""}
                onChange={(newValue) => {
                  let newFormValues = [...formValues];
                  newFormValues[index]["date"] = newValue;
                  setFormValues(newFormValues);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </span>
            <span className="substituionFlex" style={{ marginRight: "10px" }}>
              <TimePicker
                label="Time"
                name="time"
                style={{ marginRight: "10px" }}
                value={element.time || ""}
                onChange={(newValue) => {
                  let newFormValues = [...formValues];
                  newFormValues[index]["time"] = newValue;
                  setFormValues(newFormValues);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </span>
          </LocalizationProvider>

          <span className="substituionFlex">
            <FormControl>
              <InputLabel id="demo-simple-select-label">Faculty</InputLabel>
              <Select
                labelId="Faculty Name"
                id="faculty-select-label"
                value={
                  element && element.substituteFaculty
                    ? `${element.substituteFaculty},${element.email}`
                    : ""
                }
                label="Faculty"
                variant="outlined"
                onChange={(newValue) => {
                  console.log(newValue.target.value.split(","));
                  let newFormValues = [...formValues];
                  newFormValues[index]["substituteFaculty"] =
                    newValue.target.value.split(",")[0];
                  newFormValues[index]["email"] =
                    newValue.target.value.split(",")[1];
                  setFormValues(newFormValues);
                }}
                style={{
                  height: "56px",
                  width: "182px",
                  marginRight: "10px",
                }}
              >
                {selectFacultyOptions.map((row) => (
                  <MenuItem key={row._id} value={`${row._id},${row.email}`}>
                    {row.fullName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </span>

          <span className="substituionFlex">
            <TextField
              name="email"
              style={{ marginRight: "10px" }}
              value={element.email || ""}
              onChange={(e) => handleChange(index, e)}
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              disabled
            />
          </span>
        </div>
      ))}
      <span>
        <Button
          style={{ marginTop: "10px", marginLeft: "30px", margin: "10px" }}
          variant="contained"
          onClick={() => addFormFields()}
        >
          Add Substitute
        </Button>
      </span>
    </div>
  );
};

export default Substitution;
