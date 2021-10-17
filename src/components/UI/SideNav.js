import "./SideNav.css";
import { useHistory } from "react-router";
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;


const SideNav = () => {
  let history = useHistory();

  
  const handleLogout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('userToken');
    history.push('/');
  }

  const userData = JSON.parse(localStorage.getItem('userData'));

  return (

    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
            <ListItem button key={'Dashboard'}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={'Dashboard'} onClick={() => history.push("/dashboard")}/>
            </ListItem>

            <ListItem button key={'Apply For Leave'}>
              <ListItemIcon>
                <InboxIcon /> 
              </ListItemIcon>
              <ListItemText primary={'Apply For Leave'} onClick={() => history.push("/leave-application")}/>
            </ListItem>

            <ListItem button key={'Substitution Request'}>
              <ListItemIcon>
                 <InboxIcon /> 
              </ListItemIcon>
              <ListItemText primary={'Substitution Request'} onClick={() => history.push("/substitute-requests")}/>
            </ListItem>  

            {
              userData.designation === 'hod' &&
                <ListItem button key={'Approved Leaves'}>
                <ListItemIcon>
                  <InboxIcon /> 
                </ListItemIcon>
                <ListItemText primary={'Approved Leaves'} onClick={() => history.push("/approved-leaves")}/>
              </ListItem> 
            }       
        </List>
        <Divider />
        <List>
          
            <ListItem button key={'Profile'}>
              <ListItemIcon>
                <InboxIcon /> 
              </ListItemIcon>
              <ListItemText primary={'Profile'} onClick={() => history.push("/profile")}/>
            </ListItem>

            <ListItem button key={'Logout'}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={'Logout'} onClick={handleLogout} />
            </ListItem>

         
        </List>
      </Drawer>
  );
};

export default SideNav;
