import "./App.css";
import LandingPage from "./components/LandingPage/Landingpage";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideNav from "./components/UI/SideNav";
import Substitute from "./components/Substitute/Substitute";
import Leave from "./components/Leave/Leave";
import UserProfile from "./components/UserProfile/UserProfile";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ApprovedLeave from "./components/Leave/ApprovedLeave/ApprovedLeave";

function App() {



  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <PrivateRoute exact path="/dashboard" sideNav={SideNav} component={Dashboard} />
          <PrivateRoute exact path="/profile" sideNav={SideNav} component={UserProfile} />
          <PrivateRoute exact path="/leave-application" sideNav={SideNav} component={Leave} />    
          <PrivateRoute exact path="/substitute-requests" sideNav={SideNav} component={Substitute} />
          <PrivateRoute exact path="/approved-leaves" sideNav={SideNav} component={ApprovedLeave} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
