import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const LeaveDash = ({ leaveDash }) => {
  return (
    <>
      {leaveDash &&
        leaveDash.map((row) => (
          <TableRow
            key="dummy"
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              DUMMY
            </TableCell>
            <TableCell align="right">DUMMY</TableCell>
            <TableCell align="right">DUMMY</TableCell>
            <TableCell align="right">DUMMY</TableCell>
            <TableCell align="right">DUMMY</TableCell>
            <TableCell align="right">Accept</TableCell>
          </TableRow>
        ))}
    </>
  );
};

export default LeaveDash;
