import "./SideNav.css";
import { useHistory } from "react-router";
// import { makeStyles } from "@mui/core/styles";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = 260;

const SideNav = () => {
  let history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("userToken");
    history.push("/");
  };

  const userData = JSON.parse(localStorage.getItem("userData"));

  // const useStyles = makeStyles({
  //   list: {
  //     width: 250,
  //   },
  //   fullList: {
  //     width: "auto",
  //   },
  //   paper: {
  //     background: "blue",
  //   },
  // });
  // const classes = useStyles();

  return (
    <Drawer
      // classes={{ paper: classes.paper }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <List style={{ marginTop: "20px" }}>
        <ListItem button key={"Dashboard"}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText
            primary={"Dashboard"}
            style={{ fontSize: "16px" }}
            onClick={() => history.push("/dashboard")}
          />
        </ListItem>
        {userData.designation === "hod" ? (
          <ListItem button key={"My Leaves"}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText
              primary={"My Leaves"}
              style={{ fontSize: "16px" }}
              onClick={() => history.push("/my-leaves")}
            />
          </ListItem>
        ) : null}

        <ListItem
          // style={{ backgroundColor: "blue" }}
          button
          key={"Apply For Leave"}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText
            primary={"Apply For Leave"}
            style={{ fontSize: "16px" }}
            onClick={() => history.push("/leave-application")}
          />
        </ListItem>

        <ListItem button key={"Substitution Request"}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText
            primary={"Substitution Request"}
            style={{ fontSize: "16px" }}
            onClick={() => history.push("/substitute-requests")}
          />
        </ListItem>

        {userData.designation === "hod" && (
          <ListItem button key={"Approved Leaves"}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Approved Leaves"}
              style={{ fontSize: "16px" }}
              onClick={() => history.push("/approved-leaves")}
            />
          </ListItem>
        )}
      </List>
      <Divider />
      <List>
        <ListItem button key={"Profile"}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText
            primary={"Profile"}
            style={{ fontSize: "16px" }}
            onClick={() => history.push("/profile")}
          />
        </ListItem>

        <ListItem button key={"Logout"}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText
            primary={"Logout"}
            style={{ fontSize: "16px" }}
            onClick={handleLogout}
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideNav;
