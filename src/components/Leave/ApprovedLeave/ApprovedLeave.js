import { useState, useEffect } from "react";
import ApprovedLeavePartial from "./ApprovedLeavePartial";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableContainer,
  Grid,
  Box,
  Paper,
  TableBody,
} from "@mui/material";
import axios from "axios";

const ApprovedLeave = ({}) => {
  const [approvedLeavePartial, setApprovedLeaves] = useState([]);
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
        setApprovedLeaves(res.data.data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <div className="dashboard flex flex-column">
        <div style={{ marginRight: "20px", marginTop: "40px" }}>
          <span className="dash-heading">Approved Leaves </span>
          <TableContainer
            component={Paper}
            style={{ marginTop: "30px", border: "2 px solid lightgray" }}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Requested By</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>Leave Type</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>Duration</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>Leave Date</b>
                  </TableCell>
                  {/* <TableCell align="right">
                    <b>To Date</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Reason</b>
                  </TableCell> */}
                  <TableCell align="center">
                    <b>Approved on</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {approvedLeavePartial && (
                  <ApprovedLeavePartial
                    approvedLeavePartial={approvedLeavePartial}
                    status="approved"
                  />
                )}
              </TableBody>
            </Table>
          </TableContainer>

          {/* <h3> Rejected Leaves </h3>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Requested By</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Leave Type</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Duration</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>From Date</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>To Date</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Reason</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Substituion</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {approvedLeavePartial && (
                  <ApprovedLeavePartial
                    approvedLeavePartial={approvedLeavePartial}
                    status="rejected"
                  />
                )}
              </TableBody>
            </Table>
          </TableContainer> */}
        </div>
      </div>
    </div>
  );
};

export default ApprovedLeave;
