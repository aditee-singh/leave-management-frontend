

import CustCards from './CustCards/CustCards';
import SubstitutedTable from './SubstitutedTable/SubstitutedTable';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import "./Substitute.css";
import axios from 'axios';
import { useState, useEffect } from 'react';

const Substitute = () => {

  
  const [substituteClasses, setSubClass] = useState([]);

  const userToken = JSON.parse(localStorage.getItem('userToken'));  
  const userData = JSON.parse(localStorage.getItem('userData'));

 
  useEffect(() => {
    axios({url: `https://ncs-leave-management.herokuapp.com/api/user-request/?requestID=${userData._id}`, method: "get", headers: {"authorization": `Bearer ${userToken.jwt}`}})
    .then((res) => {
      if (res?.data?.user?.substituteClasses){
        setSubClass(res?.data?.user?.substituteClasses);
      }
    })
    .catch((e) => {
      console.log(e);
    })

  },[]);


  function createDataForCards(name, date, time, subject) {
    return { name, date, time, subject };
  }
  
  const requestCards = [
    createDataForCards('Mr. wqret', '2020-01-02', '03:01:01', 'maths'),
    createDataForCards('Mr. sad', '2020-01-02', '03:01:01', 'maths'),
    createDataForCards('Mr. qwe', '2020-01-02', '03:01:01', 'maths'),
    
  ];


  return (
        
          <div className="subs flex flex-column" >
            <div><h2> Substitution Request </h2></div>
            <div><h3> Pending Request </h3></div>
            
            <div style={{ marginRight: "20px" }}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{"padding": "5px", "margin": "10px"}}>
                <CustCards requestCards={requestCards} />
              </Grid>
            </Box>
            </div>
            
            <div style={{ marginRight: "20px" }}>
              <h2> Substituted Classes </h2>
              <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell><b>Date</b></TableCell>
                        <TableCell align="right"><b>Time</b></TableCell>
                        <TableCell align="right"><b>Class</b></TableCell>
                        <TableCell align="right"><b>Substitution Of</b></TableCell>
                        <TableCell align="right"><b>Accepted On</b></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                      { substituteClasses &&
                      <SubstitutedTable substituteClasses={substituteClasses} />
                      }
                    </TableBody>        
                  </Table>
              </TableContainer>
              
            </div>
          </div>
          
      );
};

export default Substitute;
