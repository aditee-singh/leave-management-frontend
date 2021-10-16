import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import { FormControlLabel } from "@mui/material";
import { FormLabel } from "@mui/material";
import { Radio } from "@mui/material";

const Leave = () => {
  return (
    <div className="flex flex-column justify-left">
      <h1>Apply for Leave</h1>
      <span>
        <b>Leave Address:&nbsp;</b>Ajay HOD
      </span>
      Leave Request for
      {/* <form className="flex flex-row">
          <input type="radio" value="Casual" /> Casual   
        <input type="radio" value="Earned" />
         Earned
        <input type="radio" value="sick" /> sick
      </form> */}
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="other"
          />
        </RadioGroup>
      </FormControl>
      <span>Date</span>
    </div>
  );
};

export default Leave;
