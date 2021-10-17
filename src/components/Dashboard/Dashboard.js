import "./Dashboard.css";
import { useHistory } from "react-router";
import {Table, TableHead, TableCell, TableRow, TableContainer, Grid, Box, Paper, TableBody} from "@mui/material";
import LeaveDash from "./LeaveDash/LeaveDash";
import AdminLeaveDash from "./LeaveDash/AdminLeaveDash";
import axios from "axios";
import { useState, useEffect } from "react";

const Dashboard = () => {
  let history = useHistory();
  const [leaveDash, setLeaveDash] = useState([]);
  const [adminLeaveDash, setAdminLeaveDash] = useState([]);

  const userData = JSON.parse(localStorage.getItem('userData'));
  const userToken = JSON.parse(localStorage.getItem('userToken'))

  useEffect(() => {
    axios({url: "https://ncs-leave-management.herokuapp.com/api/leave-application", method: "get", headers: { "Content-Type": "application/json", "authorization": `Bearer ${userToken.jwt}` }})
    .then((res) => {
      console.log("huehuehue", res.data.data);
      setAdminLeaveDash(res.data.data);
    })
    .catch((error) => console.log('error', error))
  
  }, []);

  

  
  return (
    
    <div className="dashboard flex flex-column">
      <div><h2> Dashboard </h2></div>
      { userData.designation !== 'hod' ?
      <div>
        <div style={{marginTop: "15px", width: "50%"}} >
                <TableContainer component={Paper}>
                  <Table  aria-label="simple table">
                      <TableHead>
                      <TableRow>
                          <TableCell><b>Casual Leave</b></TableCell>
                          <TableCell align="right"><b>Sick Leave</b></TableCell>
                          <TableCell align="right"><b>Earned Leaves</b></TableCell>
                          <TableCell align="right"><b>Pending Requests</b></TableCell>
                      </TableRow>
                      </TableHead>
                      <TableBody>
                          <TableRow
                              key='leaves'
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >
                              <TableCell component="th" scope="row">
                                  12
                              </TableCell>
                              <TableCell align="right">5</TableCell>
                              <TableCell align="right">5</TableCell>
                              <TableCell align="right">3</TableCell>
                              </TableRow>
                      </TableBody>        
                    </Table>
                </TableContainer>

              </div>
              
              
              <div style={{ marginRight: "20px", marginTop: "40px" }}>
                <h3> Pending Leaves  </h3>
                <TableContainer component={Paper}>
                  <Table  aria-label="simple table">
                      <TableHead>
                      <TableRow>
                          <TableCell><b>Applied On</b></TableCell>
                          <TableCell align="right"><b>Type of Leave</b></TableCell>
                          <TableCell align="right"><b>Duration</b></TableCell>
                          <TableCell align="right"><b>Leave Date</b></TableCell>
                          <TableCell align="right"><b>Substitute Status</b></TableCell>
                          <TableCell align="right"><b>Actions</b></TableCell>
                      </TableRow>
                      </TableHead>
                      <TableBody>
                        { leaveDash &&
                        <LeaveDash leaveDash = {leaveDash} />
                        }
                      </TableBody>        
                    </Table>
                </TableContainer>
                
              </div> 
          </div> 
          :
          <div>
            <div style={{marginTop: "15px", width: "50%"}} >
                <TableContainer component={Paper}>
                  <Table  aria-label="simple table">
                      <TableHead>
                      <TableRow>
                          <TableCell><b>No. of teachers on leave</b></TableCell>
                          <TableCell align="right"><b>Casual Leave</b></TableCell>
                          <TableCell align="right"><b>Earned Leaves</b></TableCell>
                          <TableCell align="right"><b>Pending Leaves</b></TableCell>
                      </TableRow>
                      </TableHead>
                      <TableBody>
                          <TableRow
                              key='leaves'
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >
                              <TableCell component="th" scope="row">
                                  12
                              </TableCell>
                              <TableCell align="right">5</TableCell>
                              <TableCell align="right">5</TableCell>
                              <TableCell align="right">3</TableCell>
                              </TableRow>
                      </TableBody>        
                    </Table>
                </TableContainer>

              </div>

            <div style={{ marginRight: "20px", marginTop: "40px" }}>
                <h3> Pending Leaves  </h3>
                <TableContainer component={Paper}>
                  <Table  aria-label="simple table">
                      <TableHead>
                      <TableRow>
                          <TableCell><b>Requested By</b></TableCell>
                          <TableCell align="right"><b>Leave Type</b></TableCell>
                          <TableCell align="right"><b>Duration</b></TableCell>
                          <TableCell align="right"><b>From Date</b></TableCell>
                          <TableCell align="right"><b>To Date</b></TableCell>
                          <TableCell align="right"><b>Reason</b></TableCell>
                          <TableCell align="right"><b>Substituion</b></TableCell>
                          <TableCell align="right"><b>Action</b></TableCell>

                      </TableRow>
                      </TableHead>
                      <TableBody>
                        {adminLeaveDash &&
                        <AdminLeaveDash adminLeaveDash = {adminLeaveDash} />
                        }
                      </TableBody>        
                    </Table>
                </TableContainer>
                
              </div> 
            
          </div>
      } 
         
    </div>
  );
};

export default Dashboard;
