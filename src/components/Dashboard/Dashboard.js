import { useState, useEffect } from "react";

import "./Dashboard.css";

import AdminDashboard from "./Admin/AdminDashboard";
import AdminDashboardLeaves from "./Admin/AdminDashboardLeaves";
import { getRequestWithToken } from './../../helpers/backend_requests';
import UserDashboardLeaves from "./User/UserDashboardLeave";

const apiUrlEndpoint = '/api/leave-application';

const Dashboard = () => {

  const [leaveDashData, setLeaveDashData] = useState([]);
  const [currentLeaveDashData, setcurrentLeaveDashData] = useState([]);


  const userData = JSON.parse(localStorage.getItem("userData"));
  const userToken = JSON.parse(localStorage.getItem("userToken"));

  useEffect(() => {
    getRequestWithToken({apiUrlEndpoint, token: userToken.jwt})
      .then((res) => {
        setLeaveDashData(res.data?.data);
        setcurrentLeaveDashData(res.data?.data);
      })
      .catch((error) => console.log('error in dashboard: ', error));
  }, []);


  return (
    <div className="dashboard flex flex-column">
      <div>
        <h2 className="dash-heading"> Dashboard </h2>
      </div>
      {userData.designation !== "hod" ? (
         <UserDashboardLeaves leaveDashData={leaveDashData} />
      ) : (
        <div>
          <AdminDashboardLeaves leaveDashData={leaveDashData} currentLeaveDashData = {currentLeaveDashData} setcurrentLeaveDashData = {setcurrentLeaveDashData} />
          <AdminDashboard leaveDashData={currentLeaveDashData}/>   
        </div>
      )}
    </div>
  );
};

export default Dashboard;
