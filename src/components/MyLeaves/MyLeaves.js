import TableComponent from "../UI/Table/Table";
import "./MyLeaves.css";

const MyLeaves = () => {
  return (
    <div style={{ marginLeft: "20%", marginTop: "40px" }}>
      <h2 className="my-leaves-heading"> My Leaves </h2>
      <div>
        <div className="flex flex-row leave-div">
          <div className="flex flex-column leave-column0">
            <span className="number">12</span>
            <span className="leave-caption">Casual Leaves</span>
          </div>
          <div className="flex flex-column leave-column">
            <span className="number">12</span>
            <span className="leave-caption">Casual Leaves</span>
          </div>
          <div className="flex flex-column leave-column1">
            <span className="number">12</span>
            <span className="leave-caption">Casual Leaves</span>
          </div>
        </div>
        <button className="dash-btn">Apply for leave</button>

        <div style={{ marginRight: "20px", marginTop: "40px" }}>
          <h3 className="pending-leave"> Pending Leaves </h3>
          <TableComponent />
        </div>
      </div>
    </div>
  );
};
export default MyLeaves;
