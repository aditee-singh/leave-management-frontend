
import "./UserProfile.css";
import axios from "axios";

import { FormControl, FormLabel, TextField, Button, Select, InputLabel, MenuItem} from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router";

const UserProfile = () => {

    let history = useHistory();

    const userData = JSON.parse(localStorage.getItem('userData'));
    
    const [fullName, setFullName] = useState(userData.fullName);
    const [department, setDepartment] = useState(userData.department);
    const [designation, setDesignation] = useState(userData.designation);
    const [email, setEmail] = useState(userData.email);
    const [phone, setPhone] = useState(userData.phone);
    const [toekn, settoken] = useState(userData._id)

    const handleDeptChange = (event) => {
        setDepartment(event.target.value);
    };
    const handleDesigChange = (event) => {
        setDesignation(event.target.value);
    };
    const handleNameChange = (event) => {
        setFullName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
    

        const user = {};
        if (evt.target.name.value)
            user["fullName"] = evt.target.name.value;
        if (evt.target.department.value){
            user["department"] = evt.target.department.value;
        }
        if (evt.target.designation.value){
            user["designation"] = evt.target.designation.value;
        }
        if (evt.target.email.value){
            user["email"] = evt.target.email.value;
        }
        if (evt.target.phone.value){
            user["phone"] = evt.target.phone.value;
        }
        const userToken = JSON.parse(localStorage.getItem('userToken'));


        console.log(user);
        const apiUrl = "https://ncs-leave-management.herokuapp.com/api/update-user";
  
        axios({method: 'put', url: apiUrl, data: user, headers: { "Content-Type": "application/json", "authorization": `Bearer ${userToken.jwt}` }})
            .then((res) => {
                
                localStorage.setItem('userData', JSON.stringify(res.data.data));
                history.push('/profile');
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const handleSubmitPassword = evt => {
        evt.preventDefault();
    
        const data = {
          "oldpass": evt.target.oldpass.value,
          "newpass": evt.target.newpass.value,
          "renewpass": evt.target.renewpass.value,
        };
    
        alert(`values to change ${JSON.stringify(data)}`); 
    }

    return (
        <div className="userprofile flex flex-column" >
           <div>
            <form name="tox" id="my-form-id" onSubmit={handleSubmit} >
                    <h2> Profile </h2>
                    <FormControl component="fieldset">
                    <div style={{marginTop: "15px"}}>
                        <FormLabel component="legend" ><b>Full Name</b> </FormLabel>
                        <TextField name="name" id="text" type="text" placeholder={fullName} onChange={handleNameChange}  style={{width:"500px"}}/>
                    </div>
                    <div style={{marginTop: "15px", display:"flex", alignItems: "center", flexFlow: "row wrap"}} >
                        <span style={{marginRight: "40px"}}>
                            {/* <FormLabel component="legend" ><b>Department</b> </FormLabel>
                            <TextField name="department" id="text" type="text" required style={{width:"300px"}}/> */}
                            <FormControl>
                            <InputLabel id="demo-simple-select-label">Department</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                style={{width:"300px"}}
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
                                    style={{width:"300px"}}
                                    label="Designation"
                                    name="designation"
                                    value={designation}
                                    onChange={handleDesigChange}
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
                    <div style={{marginTop: "15px"}}>
                        <FormLabel component="legend" ><b>Email</b> </FormLabel>
                        <TextField name="email" id="text" type="email" placeholder={email} onChange={handleEmailChange}   style={{width:"500px"}}/>
                    </div>
                    <div style={{marginTop: "15px"}}>
                        <FormLabel component="legend" ><b>Phone Number</b> </FormLabel>
                        <TextField name="phone" id="text" type="text" placeholder={phone} onChange={handlePhoneChange}   style={{width:"500px"}}/>
                    </div>
                    <Button variant="contained" type="submit" style={{"marginTop": "20px", "width": "10rem"}} > Edit Profile</Button>

                    </FormControl>

                    
                </form>
            </div>

            <div>
            <form name="tox2" id="my-form-id2" onSubmit={handleSubmitPassword} >
                    <h2> Change Password </h2>
                    <p> The password should be 6 character long </p>
                    <FormControl component="fieldset">
                    <div style={{marginTop: "15px"}}>
                        <FormLabel component="legend" ><b>Password</b> </FormLabel>
                        <TextField name="oldpass" id="text" type="password" required style={{width:"500px"}}/>
                    </div>
                    <div style={{marginTop: "15px", display:"flex", alignItems: "center", flexFlow: "row wrap"}} >
                        <span style={{marginRight: "40px"}}>
                            <FormLabel component="legend" ><b>New Password</b> </FormLabel>
                            <TextField name="newpass" id="text" type="password" required style={{width:"300px"}}/>
                        </span>
                        <span>
                            <FormLabel component="legend" ><b>Re Enter New Password</b> </FormLabel>
                            <TextField name="renewpass" id="text" type="password" required style={{width:"300px"}}/>   
                        </span>
                    
                    </div>
                    
                    <Button variant="contained" type="submit" style={{"marginTop": "20px", "width": "15rem"}} > Reset Password</Button>

                    </FormControl>

                    
                </form>
            </div>
            
        </div>
    );
};

export default UserProfile;