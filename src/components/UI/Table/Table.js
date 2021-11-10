import { useState } from "react";
import { useHistory } from "react-router";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
  IoIosRefresh,
  IoIosCheckmark,
} from "react-icons/io";
import "./Table.css";

import { deleteRequestWithToken } from "../../../helpers/backend_requests";

const deleteLeave = "/api/leave-application";

const Table = ({ data }) => {
  const userToken = JSON.parse(localStorage.getItem("userToken"));

  const [dropClass, setDropClass] = useState(false);
  const dropdownClass = dropClass ? "db" : "dn";
  const handleClick = (e) => {
    setDropClass(!dropClass);
  };

  const editButtonEvent = (evt) => {
    alert(evt);
    // console.log(evt);
    // history.push({
    //     pathname: '/my-leaves',
    //     search: '?query='+evt.target.value,
    // });
  };

  const cancelButtonEvent = (id) => {
    deleteRequestWithToken({
      apiUrlEndpoint: deleteLeave,
      id,
      token: userToken.jwt,
    });
  };

  return (
    <div className="flex flex-column table">
      <div className="flex flex-row table-header">
        <span style={{ width: "12%", textAlign: "center" }}>Applied on</span>
        <span style={{ width: "20%", textAlign: "center" }}>Type of Leave</span>
        <span style={{ width: "10%", textAlign: "center" }}>Duration</span>
        <span style={{ width: "30%", textAlign: "center" }}>Leave Date</span>
        <span style={{ width: "10%", textAlign: "center" }}>Status</span>
        <span style={{ width: "20%", textAlign: "center" }}>
          Substitute status
        </span>
        <span style={{ width: "20%", textAlign: "center" }}></span>
      </div>
      {data &&
        data.map((row) => (
          <div className="flex flex-row table-body" key={row._id}>
            <span style={{ width: "12%", textAlign: "center" }}>
              {new Date(row.createdAt).toLocaleDateString()}
            </span>
            <span style={{ width: "20%", textAlign: "center" }}>
              {row.leaveRequestFor}
            </span>
            <span style={{ width: "10%", textAlign: "center" }}>
              {row.duration}
            </span>
            <span style={{ width: "30%", textAlign: "center" }}>
              {new Date(row.startDate).toLocaleDateString()}-{" "}
              {new Date(row.endDate).toLocaleDateString()}
            </span>
            <span style={{ width: "10%", textAlign: "center" }}>
              {row.status}
            </span>
            <span
              onClick={handleClick}
              className="dropdown"
              style={{ width: "15%", textAlign: "center" }}
            >
              <span style={{ marginRight: "20px", textAlign: "center" }}>
                1/5
              </span>
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
            {row.status.toLowerCase() == "pending" ? (
              <span className="flex flex-row" style={{ width: "20%" }}>
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
                  onClick={() => editButtonEvent(row._id)}
                >
                  Edit
                </button>
                <button
                  style={{
                    border: "none",
                    color: "red",
                    backgroundColor: "white",
                  }}
                  onClick={() => cancelButtonEvent(row._id)}
                >
                  Cancel
                </button>
              </span>
            ) : (
              <span className="flex flex-row" style={{ width: "20%" }}></span>
            )}
          </div>
        ))}
    </div>
  );
};

export default Table;
