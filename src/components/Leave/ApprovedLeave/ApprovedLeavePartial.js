import { TableCell, TableRow } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import axios from "axios";
import moment from "moment";

const ApprovedLeavePartial = ({ approvedLeavePartial, status }) => {
  return (
    <>
      {approvedLeavePartial.map(
        (row) =>
          row.status === status && (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.createdBy.fullName}
              </TableCell>
              <TableCell align="center" style={{ marginLeft: "10px" }}>
                {row.leaveRequestFor}
              </TableCell>
              <TableCell align="center">{row.duration}</TableCell>
              <TableCell align="center">
                {moment(row.startDate).format("DD/MM/YYYY")} -{" "}
                {moment(row.endDate).format("DD/MM/YYYY")}
              </TableCell>
              <TableCell align="center">
                {moment(row.startDate).format("DD/MM/YYYY")}
              </TableCell>
              {/* <TableCell align="right">{row.endDate}</TableCell> */}
              {/* <TableCell align="right">{row.reason}</TableCell> */}
              {/* <TableCell align="right">
                {row.substituteClasses[0].substituteFaculty.fullName}
              </TableCell> */}
            </TableRow>
          )
      )}
    </>
  );
};

export default ApprovedLeavePartial;
