import "./SideNav.css";
import { useHistory } from "react-router";

const SideNav = () => {
  let history = useHistory();
  return (
    <div className="sidenav">
      <span class="option" onClick={() => history.push("/profile")}>
        Dashboard
      </span>
      <span
        className="option"
        onClick={() => history.push("/leave-application")}
      >
        Apply for Leave
      </span>
      <span
        className="option"
        onClick={() => history.push("/substitute-requests")}
      >
        Substitution Request
      </span>
    </div>
  );
};

export default SideNav;
