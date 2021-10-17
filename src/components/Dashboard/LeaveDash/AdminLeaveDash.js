
import {TableCell, TableRow} from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useEffect } from "react";
import axios from "axios";



const AdminLeaveDash = ({adminLeaveDash}) => {
  
    const userToken = JSON.parse(localStorage.getItem('userToken'));
    const sendPut = ({id, status}) => {
        axios({url: `https://ncs-leave-management.herokuapp.com/api/leave-application/${id}`, method: "put", headers: {'Authorization': `Bearer ${userToken.jwt}`}, data: {status}})
        .then((res) => {
            console.log("huehueh", res.data);
            window.location.reload();
        })
        .catch((e) => {
            console.log(e);
        })
    }

    const handleAccept = (id) => {
        console.log(id);
        sendPut({id, status: 'approved'})

    };
    
    const handleReject = (id) => {
        console.log(id);
        sendPut({id, status: 'rejected'})
    };
    
    
    return (
        <>           
            { adminLeaveDash.map((row) => (
                 row.status === "Pending" &&
                    <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.createdBy.fullName}
                    </TableCell>
                    <TableCell align="right">{row.leaveRequestFor}</TableCell>
                    <TableCell align="right">{row.duration}</TableCell>
                    <TableCell align="right">{row.startDate}</TableCell>
                    <TableCell align="right">{row.endDate}</TableCell>
                    <TableCell align="right">{row.reason}</TableCell>
                    <TableCell align="right">{row.substituteClasses[0].substituteFaculty.fullName}</TableCell>
                    <TableCell align="right" sx={{alignItems: "inline"}}>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" color="success" onClick={() => handleAccept(row._id)} sx={{fontSize: "8px", width: "5px"}}>
                            Accept
                        </Button>
                        <Button variant="contained" color="error" onClick={() => handleReject(row._id)} sx={{fontSize: "8px", width: "5px"}}>
                            Reject
                        </Button>
                     </Stack>
                    </TableCell>
                    </TableRow>
                
            ))}  
        </>
    );
};

export default AdminLeaveDash;