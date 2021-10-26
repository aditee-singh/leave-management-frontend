import SubstitutedTable from "./SubstitutedTable/SubstitutedTable";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "../UI/Card/Card";

import "./Substitute.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Substitute = () => {
  const [substituteClasses, setSubstituteClasses] = useState([]);

  const userToken = JSON.parse(localStorage.getItem("userToken"));
  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    axios({
      url: `https://ncs-leave-management.herokuapp.com/api/user-request/?requestID=${userData._id}`,
      method: "get",
      headers: { authorization: `Bearer ${userToken.jwt}` },
    })
      .then((res) => {
        if (res?.data?.user?.substituteClasses) {
          setSubstituteClasses(res?.data?.user?.substituteClasses);
        }
        console.log('substitute classes', res.data.user.substituteClasses);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);


  return (
    <div className="subs flex flex-column">
      <div>
        <h2 className="subs-heading"> Substitution Request </h2>
      </div>
      <div>
        <h3 className="subs-subheading"> Pending Request </h3>
      </div>
      <div>
        {
          substituteClasses && (
            <Card data={substituteClasses} />
          )
        }
      </div>
      <div style={{ marginRight: "20px", marginTop: "50px" }}>
        <span
          style={{
            fontWeight: "normal",
            fontSize: "18px",
            lineHeight: "21px",
          }}
        >
          Substituted Classes
        </span>
        <TableContainer component={Paper} style={{ marginTop: "50px" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Date</b>
                </TableCell>
                <TableCell align="right">
                  <b>Time</b>
                </TableCell>
                <TableCell align="right">
                  <b>Class</b>
                </TableCell>
                <TableCell align="right">
                  <b>Substitution Of</b>
                </TableCell>
                <TableCell align="right">
                  <b>Accepted On</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {substituteClasses && (
                <SubstitutedTable substituteClasses={substituteClasses} />
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Substitute;
