import "./Card.css";

const Card = () => {
  return (
    <div className="flex flex-column card">
      <span className="caption-text">Requested by</span>
      <span className="main-text">Mr. Ajay Kumar Soni</span>

      <span className="flex flex-row">
        <span className="flex flex-column">
          <span className="caption-text">Date</span>
          <span className="main-text" style={{ marginRight: "100px" }}>
            12/07/2021
          </span>
        </span>
        <span className="flex flex-column">
          <span className="caption-text">Time</span>
          <span className="main-text">11:30 AM - 12:30 AM</span>
        </span>
      </span>

      <span className="caption-text">Class</span>
      <span className="main-text">DSTL CSE-2</span>
      <span className="flex flex-row">
        <button className="card-btn-accept">Accept</button>
        <button className="card-btn-deny">Deny</button>
      </span>
    </div>
  );
};
export default Card;
