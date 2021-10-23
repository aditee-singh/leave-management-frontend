import { useState } from "react";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
  IoIosRefresh,
  IoIosCheckmark,
} from "react-icons/io";
import "./Table.css";

const Table = () => {
  const [dropClass, setDropClass] = useState(false);
  const dropdownClass = dropClass ? "db" : "dn";
  const handleClick = (e) => {
    setDropClass(!dropClass);
  };

  return (
    <div className="flex flex-column table">
      <div className="flex flex-row table-header">
        <span style={{ marginRight: "76px" }}>Applied on</span>
        <span style={{ marginRight: "37px" }}>Type of Leave</span>
        <span style={{ marginRight: "43px" }}>Duration</span>
        <span style={{ marginRight: "116px" }}>Leave Date</span>
        <span>Substitute status</span>
      </div>
      <div className="flex flex-row table-body">
        <span style={{ marginRight: "93px" }}>12/04/21</span>
        <span style={{ marginRight: "45px" }}>Casual Leave</span>
        <span style={{ marginRight: "43px" }}>Full Day</span>
        <span style={{ marginRight: "65px" }}>12/04/2 - 16/04/21</span>
        <span
          onClick={handleClick}
          className="dropdown"
          style={{ marginRight: "44px" }}
        >
          <span style={{ marginRight: "90px" }}>1/5</span>
          {!dropClass ? (
            <IoIosArrowDropdownCircle />
          ) : (
            <IoIosArrowDropupCircle />
          )}
          <div className={`dropdown-content ${dropdownClass}`}>
            <span className="flex flex-row">
              <p>Ajay</p>
              <IoIosCheckmark style={{ marginLeft: "20px" }} />
            </span>
            <span className="flex flex-column">
              <p>Ajay</p>
              <IoIosRefresh style={{ marginLeft: "20px" }} />
            </span>
          </div>
        </span>
        <span className="flex flex-row">
          <button
            style={{
              backgroundColor: "#1a73e8",
              color: "white",
              border: "none",
              paddingTop: "8px",
              paddingBottom: "8px",
              paddingLeft: "18px",
              paddingRight: "18px",
              borderRadius: "5px",
              marginRight: "16px",
            }}
          >
            Edit
          </button>
          <button
            style={{ border: "none", color: "red", backgroundColor: "white" }}
          >
            Cancel
          </button>
        </span>
      </div>
    </div>
  );
};

export default Table;
