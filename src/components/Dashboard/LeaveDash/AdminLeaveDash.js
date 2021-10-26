import { TableCell, TableRow } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import moment from "moment";
import "../Dashboard.css";

const AdminLeaveDash = ({ adminLeaveDash }) => {
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  const sendPut = ({ id, status }) => {
    axios({
      url: `https://ncs-leave-management.herokuapp.com/api/leave-application/${id}`,
      method: "put",
      headers: { Authorization: `Bearer ${userToken.jwt}` },
      data: { status },
    })
      .then((res) => {
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleAccept = (id) => {
    console.log(id);
    sendPut({ id, status: "approved" });
  };

  const handleReject = (id) => {
    console.log(id);
    sendPut({ id, status: "rejected" });
  };

  return (
    <>
      {adminLeaveDash.map(
        (row) =>
          row.status === "Pending" && (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.createdBy.fullName}
              </TableCell>
              <TableCell align="">{row.leaveRequestFor}</TableCell>
              <TableCell align="">{row.duration}</TableCell>
              <TableCell align="">
                {moment(row.startDate).format("DD/MM/YYYY")}
              </TableCell>
              <TableCell align="">
                {moment(row.endDate).format("DD/MM/YYYY")}
              </TableCell>
              <TableCell align="">{row.reason}</TableCell>
              <TableCell align="">
                {row.substituteClasses[0].substituteFaculty.fullName}
              </TableCell>
              <TableCell align="" sx={{ alignItems: "inline" }}>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    className="admin-btn-accept"
                    color="success"
                    onClick={() => handleAccept(row._id)}
                    sx={{ fontSize: "8px", width: "5px" }}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="contained"
                    className="admin-btn-reject"
                    color="error"
                    onClick={() => handleReject(row._id)}
                    sx={{ fontSize: "8px", width: "5px" }}
                  >
                    Reject
                  </Button>
                </Stack>
              </TableCell>
            </TableRow>
          )
      )}
    </>
  );
};

export default AdminLeaveDash;
