
import { FormLabel, TextField, Button } from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker, TimePicker } from "@mui/lab";
import "./Substitution.css";

const Substitution = ({formValues, setFormValues}) => {

    const inputProps = {
      step: 300,
    };


    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }
        
    let addFormFields = () => {
        setFormValues([...formValues, { subject: "", date: "", time: "", substituteFaculty: "", email: "" }])
    }

    console.log(formValues);
    return (
        <>
        {formValues.map((element, index) => ( 
            <div className="substitute" style={{border: "1px solid gray", borderRadius:"5px", padding: "5px", marginTop: "5px"}}>
                    
                <span className="substituionFlex">
                <FormLabel component="legend" >Substituion For Classes: </FormLabel>
                </span>
                <span className="substituionFlex">
                <TextField name = "subject" value={element.subject || ""} onChange={e => handleChange(index, e)} id="outlined-basic" label="Subject" variant="outlined" />
                </span>
                    
                
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <span className="substituionFlex">
                    <DatePicker
                        label="Date"
                        name = "date"
                        value={element.date || ""}
                        onChange={(newValue) => {
                            let newFormValues = [...formValues];
                            newFormValues[index]["date"] = newValue;
                            setFormValues(newFormValues);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </span>
                <span className="substituionFlex">
                    <TimePicker
                        label="Time"
                        name = "time"
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
                <TextField name="substituteFaculty" value={element.substituteFaculty || ""} onChange={e => handleChange(index, e)} id="outlined-basic" label="Substitution Faculty" variant="outlined" />
                </span>
                <span className="substituionFlex">
                <TextField name = "email" value={element.email || ""} onChange={e => handleChange(index, e)} id="outlined-basic" label="Email Address" variant="outlined" />
                </span>
                
            </div>
        ))}
        <span>
            <Button style={{"marginTop": "10px"}} variant="contained" onClick={() => addFormFields()}>Add Substitute</Button>
        </span>
        </>
        
    );
};

export default Substitution;