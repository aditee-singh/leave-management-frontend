import { FormControlLabel,FormLabel,RadioGroup,FormControl,TextField, Radio, Button } from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from "@mui/lab";
import { useState } from "react";
import Substitution from "./Substitution/Substitution";

import "./Leave.css";
import axios from "axios";

function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

const Leave = (props) => {

  
  const [fromDate, setFromDate] = useState(new Date(), null);
  const [toDate, setToDate] = useState(new Date(), null);

  const [formValues, setFormValues] = useState([{ subject: "", date: "", time: "", substituteFaculty: "", email: "" }])

  const handleSubmit = evt => {
    evt.preventDefault();

    const finalFormValues = [];

    for (let f of formValues){
      finalFormValues.push({substituteFaculty: f.substituteFaculty, data: { date: formatDate(f.date), time: new Date(f.time).toTimeString().split( " " )[0], subject: f.subject, email: f.email}});
    }
    const data = {
      "leaveRequestFor": evt.target.leave.value,
      "duration": evt.target.dayLength.value,
      "startDate": formatDate(fromDate),
      "endDate": formatDate(toDate),
      "reason": evt.target.reason.value,
      "substituteClasses": finalFormValues,
    };
    const userToken = JSON.parse(localStorage.getItem('userToken'));

    axios({url: "https://ncs-leave-management.herokuapp.com/api/leave-application", method:"post", data: data, headers: { "Content-Type": "application/json", "authorization": `Bearer ${userToken.jwt}` }})
    .then((res) => console.log(res.data))
    .catch((e) => {
      console.log(e);
    })
    console.log(JSON.stringify(data));
    
  }
  return (
    <div className="leave1 flex flex-column">
      <div><h2>Apply for Leave</h2></div>
      <div>
        <span style={{paddingTop: "5px"}}>
          <b>Leave Address:&nbsp;</b>{props.name}
        </span>
      </div>
      <form name="tox" id="my-form-id" onSubmit={handleSubmit}>
        <FormControl component="fieldset">
        <div style={{paddingTop: "30px"}}>
            
              <FormLabel component="legend" >Apply Leave For: </FormLabel>
              <RadioGroup row aria-label="leave" name="leave" >
                <FormControlLabel value="casual" control={<Radio required={true}/>} label="Casual Leave"  />
                <FormControlLabel value="earned"  control={<Radio required={true}/>} label="Earned Leave" />
                <FormControlLabel value="semester" control={<Radio required={true}/>} label="Semester Break" />
              </RadioGroup>
      
        </div>
        <div>
              <FormLabel component="legend" style={{paddingTop: "40px"}}>Duration: </FormLabel>
              <RadioGroup row aria-label="duration" name="dayLength" required>
                <FormControlLabel value="halfday" control={<Radio required={true}/>} label="Half Day" />
                <FormControlLabel value="fullday"  control={<Radio required={true}/>} label="Full Day" />
              </RadioGroup>
        </div>
        <div style={{paddingTop: "30px"}}>

          <span>
            <p>Date</p>
          </span>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
          <span >
            <DatePicker
              label="From"
              value={fromDate}
              onChange={(newValue) => {
                setFromDate(newValue);
              }}
              InputProps={{ readOnly: true }}
              disablePast
              renderInput={(params) => <TextField {...params} />}
            />
          </span>
          <span style={{marginLeft: "40px"}}>
            <DatePicker
              label="To"
              value={toDate}
              disablePast
              onChange={(newValue) => {
                setToDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
              required
            />
          </span>
        </LocalizationProvider>
        </div>
      
        <div>
          <FormLabel component="legend" style={{paddingTop: "30px"}}>Reason: </FormLabel>
            <TextField name="reason" id="text" type="text" required style={{width:"1040px", height:"104px"}}/>
        </div>

      <div>
        <Substitution formValues={formValues} setFormValues={setFormValues} />
      </div>
        <Button variant="contained" type="submit" style={{"marginTop": "10px", "width": "5rem"}} > Submit</Button>
      </FormControl>
      </form>
    </div>

  );
};

export default Leave;
