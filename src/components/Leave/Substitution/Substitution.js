import {
  FormLabel,
  TextField,
  Button,
  Input,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker, TimePicker } from "@mui/lab";
import "./Substitution.css";

const Substitution = ({ formValues, setFormValues }) => {
  const inputProps = {
    step: 300,
  };

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

  console.log(formValues);
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
            <TextField
              name="subject"
              value={element.subject || ""}
              onChange={(e) => handleChange(index, e)}
              id="outlined-basic"
              label="Subject"
              variant="outlined"
              style={{
                marginLeft: "24px",
                height: "42px",
                width: "182px",
                marginRight: "10px",
              }}
            />
            {/* <FormControl>
              <InputLabel id="demo-simple-select-label">Department</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={{ width: "182px", height: "42px" }}
                label="Department"
                name="department"
                //value={department}
                //onChange={handleDeptChange}
              >
                <MenuItem value="CSE">CS</MenuItem>
                <MenuItem value="it">IT</MenuItem>
                <MenuItem value="ece">ECE</MenuItem>
                <MenuItem value="ee">EE</MenuItem>
                <MenuItem value="eee">EEE</MenuItem>
                <MenuItem value="ce">CE</MenuItem>
                <MenuItem value="me">ME</MenuItem>
              </Select>
            </FormControl> */}
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
            <TextField
              name="substituteFaculty"
              style={{ marginRight: "10px" }}
              value={element.substituteFaculty || ""}
              onChange={(e) => handleChange(index, e)}
              id="outlined-basic"
              label="Substitution Faculty"
              variant="outlined"
            />
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
