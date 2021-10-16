import "./Dashboard.css";
import { useHistory } from "react-router";

const Dashboard = () => {
  let history = useHistory();
  return (
    <div className="dashboard flex flex-column">
      <h1 className="heading">Dashboard</h1>
      <div className="flex flex-row leave">
        <span className="flex flex-column pv-10">
          <span>5</span>
          <span>Casual Leaves</span>
        </span>
        <span className="flex flex-column pv-10">
          <span>5</span>
          <span>Earned Leaves</span>
        </span>
        <span className="flex flex-column pv-10">
          <span>5</span>
          <span>Pending Requests</span>
        </span>
      </div>
      <button
        className="btn"
        onClick={() => {
          history.push("/leave-application");
        }}
      >
        Apply Leave
      </button>
      <p className="heading pt-20">Substitution Requests</p>
      <div className="flex flex-column leave">
        <span className="flex flex-row ph-10">
          <span className="pv-20">Requested by</span>
          <span className="pv-20">Date</span>
          <span className="pv-20">Time</span>
          <span className="pv-20">Class</span>
        </span>
        <span className="flex flex-row ph-10">
          <span className="pv-20">Name</span>
          <span className="pv-20">1 oct, 2021</span>
          <span className="pv-20">11:30</span>
          <span className="pv-20">DSTL</span>
          <span className="flex flex-row pl-100">
            <button className="mh-10">Accept</button>
            <button className="mh-10">Deny</button>
          </span>
        </span>
      </div>
      <p className="heading pt-20">Pending Leaves</p>
      <div className="flex flex-column leave">
        <span className="flex flex-row ph-10">
          <span className="pv-20">Applied on</span>
          <span className="pv-20">Type of Leave</span>
          <span className="pv-20">Duration</span>
          <span className="pv-20">Leave Date</span>
          <span className="pv-20">Substitute Status</span>
          <span className="pv-20">Status</span>
        </span>
        <span className="flex flex-row ph-10">
          <span className="pv-20">1 oct, 2021</span>
          <span className="pv-20">Casual Leave</span>
          <span className="pv-20">Full Day</span>
          <span className="pv-20">3 oct, 2021</span>
          <span className="pv-20">1/2</span>
          <span className="pv-20">Pending</span>
          <span className="flex flex-row pl-100">
            <button className="mh-10">Edit</button>
            <button className="mh-10">Cancel</button>
          </span>
        </span>
      </div>
      <p className="heading pt-20">Approved Leaves</p>
      <div className="flex flex-column leave">
        <span className="flex flex-row ph-10">
          <span className="pv-20">Applied on</span>
          <span className="pv-20">Type of Leave</span>
          <span className="pv-20">Duration</span>
          <span className="pv-20">Leave Date</span>
          <span className="pv-20">Substitute Status</span>
          <span className="pv-20">Approved On</span>
        </span>
        <span className="flex flex-row ph-10">
          <span className="pv-20">1 oct, 2021</span>
          <span className="pv-20">Casual Leave</span>
          <span className="pv-20">Full Day</span>
          <span className="pv-20">3 oct, 2021</span>
          <span className="pv-20">4/4</span>
          <span className="pv-20">2 oct, 2021</span>
          <span className="flex flex-row pl-100">
            <button className="mh-10">Cancel</button>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Dashboard;
