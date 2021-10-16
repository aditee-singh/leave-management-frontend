import "./App.css";
import LandingPage from "./components/LandingPage/Landingpage";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideNav from "./components/UI/SideNav";
import Substitute from "./components/Substitute/Substitute";
import Leave from "./components/Leave/Leave";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/profile">
            <SideNav />
            <Dashboard />
          </Route>
          <Route exact path="/leave-application">
            <SideNav />
            <Leave />
          </Route>
          <Route exact path="/substitute-requests">
            <SideNav />
            <Substitute />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
