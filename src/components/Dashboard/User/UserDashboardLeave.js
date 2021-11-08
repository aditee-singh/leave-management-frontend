import { useHistory } from "react-router";
import TableComponent from "../../UI/Table/Table";

const UserDashboardLeaves = ({ leaveDashData }) => {
  let history = useHistory();

  const applyForLeavesRedirect = () => {
    history.push("/leave-application");
  };

  return (
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
        onClick={() => {
          applyForLeavesRedirect();
        }}
        style={{ cursor: "pointer" }}
      >
        Apply for leave
      </button>

      <div style={{ marginRight: "20px", marginTop: "40px" }}>
        <h3 className="pending-leave"> Pending Leaves </h3>
        <TableComponent data={leaveDashData} />
      </div>
    </div>
  );
};

export default UserDashboardLeaves;
