import TableComponent from "../UI/Table/Table";
import "./MyLeaves.css";
import { useState, useEffect } from "react";
import { getRequestWithToken } from "../../helpers/backend_requests";
import { useHistory } from "react-router";

const apiUrlEndpoint = "/api/leave-application";

const MyLeaves = () => {
  const [leaveDashData, setLeaveDashData] = useState([]);

  const userToken = JSON.parse(localStorage.getItem("userToken"));

  let history = useHistory();

  const applyForLeavesRedirect = () => {
    history.push("/leave-application");
  };

  useEffect(() => {
    getRequestWithToken({ apiUrlEndpoint, token: userToken.jwt })
      .then((res) => {
        setLeaveDashData(res.data?.data);
      })
      .catch((error) => console.log("error in dashboard: ", error));
  });

  return (
    <div style={{ marginLeft: "20%", marginTop: "40px" }}>
      <h2 className="my-leaves-heading"> My Leaves </h2>
      <div>
        <div className="flex flex-row leave-div">
          <div className="flex flex-column leave-column0">
            <span className="number">
              {leaveDashData.filter(
                (x) => x.leaveRequestFor.toLowerCase() == "casual"
              ).length || 0}
            </span>
            <span className="leave-caption">Casual Leaves</span>
          </div>
          <div className="flex flex-column leave-column">
            <span className="number">
              {leaveDashData.filter(
                (x) => x.leaveRequestFor.toLowerCase() == "sick"
              ).length || 0}
            </span>
            <span className="leave-caption">Sick Leaves</span>
          </div>
          <div className="flex flex-column leave-column1">
            <span className="number">
              {leaveDashData.filter(
                (x) =>
                  x.leaveRequestFor.toLowerCase() != "casual" &&
                  x.leaveRequestFor.toLowerCase() != "sick"
              ).length || 0}
            </span>
            <span className="leave-caption">Other Leaves</span>
          </div>
        </div>
        <button
          className="dash-btn"
          onClick={() => applyForLeavesRedirect()}
          style={{ cursor: "pointer" }}
        >
          Apply for leave
        </button>

        <div style={{ marginRight: "20px", marginTop: "40px" }}>
          <h3 className="pending-leave"> All Leaves </h3>
          <TableComponent data={leaveDashData} />
        </div>
      </div>
    </div>
  );
};
export default MyLeaves;
