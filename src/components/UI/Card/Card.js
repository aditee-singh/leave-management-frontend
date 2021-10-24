import "./Card.css";
import moment from "moment";
import axios from "axios";
import { useState, useEffect } from "react";

const Card = () => {
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  const userData = JSON.parse(localStorage.getItem("userData"));

  const [substituteClasses, setSubClass] = useState([]);

  useEffect(() => {
    axios({
      url: `https://ncs-leave-management.herokuapp.com/api/user-request/?requestID=${userData._id}`,
      method: "get",
      headers: { authorization: `Bearer ${userToken.jwt}` },
    })
      .then((res) => {
        if (res?.data?.user?.substituteClasses) {
          setSubClass(res?.data?.user?.substituteClasses);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log(substituteClasses);

  const handleAccept = (id) => {
    console.log(id);
    sendPut({ id, status: "approved" });
  };
  const handleReject = (id) => {
    console.log(id);
    sendPut({ id, status: "rejected" });
  };
  const sendPut = ({ id, status }) => {
    axios({
      url: `https://ncs-leave-management.herokuapp.com/api/user-request/${id}`,
      method: "put",
      headers: { Authorization: `Bearer ${userToken.jwt}` },
      data: { status },
    })
      .then((res) => {
        console.log("accepted", res.data);
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      {substituteClasses &&
        substituteClasses.map((row) => {
          console.log("huehuehuehu", row.status);
          <div className="flex flex-column card">
            <span className="caption-text">Requested by</span>
            <span className="main-text">Aditee</span>

            <span className="flex flex-row">
              <span className="flex flex-column">
                <span className="caption-text">Date</span>
                <span className="main-text" style={{ marginRight: "100px" }}>
                  {moment(row.date).format("DD/MM/YYYY")}
                </span>
              </span>
              <span className="flex flex-column">
                <span className="caption-text">Time</span>
                <span className="main-text">{row.time}</span>
              </span>
            </span>

            <span className="caption-text">Class</span>
            <span className="main-text">{row.subject}</span>
            <span className="flex flex-row">
              <button
                className="card-btn-accept"
                onClick={() => {
                  handleAccept(row._id);
                }}
              >
                Accept
              </button>
              <button
                className="card-btn-deny"
                onClick={() => {
                  handleReject(row._id);
                }}
              >
                Deny
              </button>
            </span>
          </div>;
        })}
      {/* <h3>You have no requests pending</h3> */}
    </>
  );
};
export default Card;
