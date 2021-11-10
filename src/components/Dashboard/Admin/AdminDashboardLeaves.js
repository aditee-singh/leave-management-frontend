import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { useState } from "react";

const AdminDashboardLeaves = ({leaveDashData, currentLeaveDashData, setcurrentLeaveDashData}) => {

    const [filteredDate, setFilteredDate] = useState(null);
    return (
        <>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            Date
            <div className="flex flex-row" style={{ marginTop: "10px" }}>
              <DatePicker
                value={filteredDate}
                onChange={(newValue) => {
                  setcurrentLeaveDashData(leaveDashData);
                  setFilteredDate(newValue);
                  setcurrentLeaveDashData([... new Set(leaveDashData.filter(x => new Date(newValue) >= new Date(x.startDate) && new Date(newValue) <= new Date(x.endDate)) )]);
                }}
                InputProps={{ readOnly: true }}
                disablePast
                renderInput={(params) => <TextField {...params} />}
                format="dd-mm-yyyy"
                // formatDate={(date) => moment(date).format("DD-MM-YYYY")}
              />
              <button className="today-btn" onClick={() => {setcurrentLeaveDashData(leaveDashData); setFilteredDate(null);}}>Reset</button>
            </div>
          </LocalizationProvider>
          <div
            className="flex flex-row leave-div teacher-div"
            style={{ marginTop: "20px" }}
          >
            <div className="flex flex-column leave-column0">

              <span className="number">{[... new Set(currentLeaveDashData.map(x => x.createdBy.email && new Date(x.endDate) >= new Date()) )].length || 0}</span>
              <span className="leave-caption">Teachers on Leave</span>
            </div>
            <div className="flex flex-column leave-column">
              <span className="number">{currentLeaveDashData.filter(x => x.leaveRequestFor.toLowerCase() === 'casual' && new Date(x.endDate) >= new Date()).length || 0}</span>
              <span className="leave-caption">Casual Leaves</span>
            </div>
            <div className="flex flex-column leave-column">
              <span className="number">{currentLeaveDashData.filter(x => x.leaveRequestFor.toLowerCase() === 'sick' && new Date(x.endDate) >= new Date()).length || 0}</span>
              <span className="leave-caption">Sick Leaves</span>
            </div>
            <div className="flex flex-column leave-column1">
              <span className="number">{currentLeaveDashData.filter(x => x.leaveRequestFor.toLowerCase() !== 'casual' && new Date(x.endDate) >= new Date()).length || 0}</span>
              <span className="leave-caption">Other Leaves</span>
            </div>
          </div>
        </>
    );
};

export default AdminDashboardLeaves;