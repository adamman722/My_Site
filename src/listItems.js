import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";

import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import LogoutIcon from "@mui/icons-material/Logout";
import About from "./Pages/About";

const mainListItems = (
  <div>
    <ListItemButton component="a" href="/LandingPage">
      <ListItemIcon>
        <DashboardIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItem button component="a" href="/Projects">
      <ListItemIcon>
        <AppsIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItem>
    <ListItem button component="a" href="/About">
      <ListItemIcon>
        <ContactPageOutlinedIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="About me!" />
    </ListItem>
  </div>
);
const secondaryListItems = (
  <div>
    <ListItem button component="a" href="/">
      <ListItemIcon>
        <LogoutIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Let me out!" />
    </ListItem>
  </div>
);

export { mainListItems, secondaryListItems };
