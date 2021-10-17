
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


const SubstitutedTable = ({substituteClasses}) => {
    console.log("huehue", substituteClasses)
    return (
        <>
            
                    
                    {substituteClasses.map((row) => (
                        
                        <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.date}
                        </TableCell>
                        <TableCell align="right">{row.time}</TableCell>
                        <TableCell align="right">{row.subject}</TableCell>
                        <TableCell align="right">DUMMY</TableCell>
                        <TableCell align="right">DUMMY</TableCell>
                        </TableRow>
                    ))}
             
        </>
    );
}

export default SubstitutedTable;