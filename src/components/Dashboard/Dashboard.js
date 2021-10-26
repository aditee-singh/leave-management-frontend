import "./Dashboard.css";
import { useHistory } from "react-router";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  TableBody,
  TextField,
} from "@mui/material";
import LeaveDash from "./LeaveDash/LeaveDash";
import AdminLeaveDash from "./LeaveDash/AdminLeaveDash";
import axios from "axios";
import { useState, useEffect } from "react";
import TableComponent from "../UI/Table/Table";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DatePicker } from "@mui/lab";

const Dashboard = () => {
  let history = useHistory();
  const [leaveDash, setLeaveDash] = useState([]);
  const [adminLeaveDash, setAdminLeaveDash] = useState([]);

  const userData = JSON.parse(localStorage.getItem("userData"));
  const userToken = JSON.parse(localStorage.getItem("userToken"));

  useEffect(() => {
    axios({
      url: "https://ncs-leave-management.herokuapp.com/api/leave-application",
      method: "get",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${userToken.jwt}`,
      },
    })
      .then((res) => {
        setAdminLeaveDash(res.data.data);
      })
      .catch((error) => console.log("error", error));
  });

  const handleApplyOnLeave = () => {
    history.push("/leave-application");
  };

  return (
    <div className="dashboard flex flex-column">
      <div>
        <h2 className="dash-heading"> Dashboard </h2>
      </div>
      {userData.designation !== "hod" ? (
        <div>
          <div className="flex flex-row leave-div">
            <div className="flex flex-column leave-column0">
              <span className="number">12</span>
              <span className="leave-caption">Casual Leaves</span>
            </div>
            <div className="flex flex-column leave-column">
              <span className="number">12</span>
              <span className="leave-caption">Casual Leaves</span>
            </div>
            <div className="flex flex-column leave-column1">
              <span className="number">12</span>
              <span className="leave-caption">Casual Leaves</span>
            </div>
          </div>
          <button className="dash-btn" onClick={handleApplyOnLeave}>
            Apply for leave
          </button>

          <div style={{ marginRight: "20px", marginTop: "40px" }}>
            <h3 className="pending-leave"> Pending Leaves </h3>
            <TableComponent data={adminLeaveDash} />
          </div>
        </div>
      ) : (
        <div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            Date
            <div className="flex flex-row" style={{ marginTop: "10px" }}>
              <DatePicker
                //value={fromDate}
                onChange={(newValue) => {
                  //setFromDate(newValue);
                }}
                InputProps={{ readOnly: true }}
                disablePast
                renderInput={(params) => <TextField {...params} />}
                format="dd-mm-yyyy"
                // formatDate={(date) => moment(date).format("DD-MM-YYYY")}
              />
              <button className="today-btn">Today</button>
            </div>
          </LocalizationProvider>
          <div
            className="flex flex-row leave-div teacher-div"
            style={{ marginTop: "20px" }}
          >
            <div className="flex flex-column leave-column0">
              <span className="number">12</span>
              <span className="leave-caption">Teachers on Leave</span>
            </div>
            <div className="flex flex-column leave-column">
              <span className="number">5</span>
              <span className="leave-caption">Casual Leaves</span>
            </div>
            <div className="flex flex-column leave-column">
              <span className="number">12</span>
              <span className="leave-caption">Casual Leaves</span>
            </div>
            <div className="flex flex-column leave-column1">
              <span className="number">12</span>
              <span className="leave-caption">Casual Leaves</span>
            </div>
          </div>
          <div style={{ marginTop: "15px", width: "50%" }}>
            {/* <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b>No. of teachers on leave</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>Casual Leave</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>Earned Leaves</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>Pending Leaves</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    key="leaves"
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
            </TableContainer> */}
          </div>

          <div style={{ marginRight: "20px", marginTop: "40px" }}>
            <h3> Pending Leaves </h3>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b>Requested By</b>
                    </TableCell>
                    <TableCell align="">
                      <b>Leave Type</b>
                    </TableCell>
                    <TableCell align="">
                      <b>Duration</b>
                    </TableCell>
                    <TableCell align="">
                      <b>From Date</b>
                    </TableCell>
                    <TableCell align="">
                      <b>To Date</b>
                    </TableCell>
                    <TableCell align="">
                      <b>Reason</b>
                    </TableCell>
                    <TableCell align="">
                      <b>Substituion</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>Action</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {adminLeaveDash && (
                    <AdminLeaveDash adminLeaveDash={adminLeaveDash} />
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
