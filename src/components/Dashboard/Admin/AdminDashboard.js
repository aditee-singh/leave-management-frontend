import AdminLeaveDash from "./AdminLeaveDash";
import {
    Table,
    TableHead,
    TableCell,
    TableRow,
    TableContainer,
    Paper,
    TableBody,
  } from "@mui/material";

const AdminDashboard = ({leaveDashData}) => {
    return (
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
                  {leaveDashData && (
                    <AdminLeaveDash adminLeaveDash={leaveDashData} />
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
    );
}

export default AdminDashboard;