import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import myPhoto from "../Media_Photos/image0.jpeg";

import aboutMeData from "./Extra_Data/aboutme";

import { mainListItems, secondaryListItems } from "../listItems";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        This is mineeeeeeee
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 200;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box ",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
    border: "1px solid hotpink",
    backgroundColor: "#252422",
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex", MozTransition: "scale(1.3)" }}>
        <CssBaseline />
        <AppBar
          position="absolute"
          open={open}
          style={{ backgroundColor: "#ca0d5d" }}
        >
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                width: "10px",
                justifyContent: "left",
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              About Meeeeeeeeeeeeeeeeeeeee
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
              backgroundColor: "#252422",
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon style={{ color: "white" }} />
              <h6 style={{ color: "white" }}>You found me!</h6>
            </IconButton>
          </Toolbar>
          <Divider style={{ backgroundColor: "hotpink" }} />
          <List style={{ color: "white" }}>{mainListItems}</List>
          <Divider style={{ backgroundColor: "hotpink" }} />
          <List style={{ color: "white" }}>{secondaryListItems}</List>
        </Drawer>

        <Box
          component="main"
          sx={{
            flexGrow: 3,
            height: "100vh",
            overflow: "auto",
            backgroundImage: "url('../Media_Videos/RainyRoofView.gif')",
          }}
        >
          <Toolbar />

          <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={4}>
              {/* {About me card} */}

              <Grid item xs={0} md={0} lg={5} id="itemAuto">
                <Paper
                  sx={{
                    boxShadow:
                      "4px 4px 3px 0px rgb(255 105 180 / 60%), 0px 1px 1px 0px rgb(255 105 180 / 82%), 4px 1px 3px 0px rgb(255 105 180 / 70%)",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <img src={myPhoto} className="thePhotoOfMeeeee"></img>
                  <p style={{}}>
                    To whomever may stumble across this page hello, hi, welcome,
                    and I am sorry.
                  </p>
                  <p>
                    A little about me, I am an aspiring software developer that
                    has my hands in quite a few different
                    languages/frameworks/libraries such as:{" "}
                    <div className="what-i-know-box">
                      {aboutMeData.map((Skills) => {
                        return <p>{Skills}</p>;
                      })}
                    </div>
                    This whole site was created as a little project for myself
                    to test my skills of React and JavaScript... I know it's not
                    the greatest but everyday I get a little better and better
                  </p>
                  <ul id="aboutMeList">
                    <li>Contact Me:</li>
                    <li>tarpeyadam@gmail.com</li>
                    <li>586-565-8464</li>
                    <li>
                      {" "}
                      <a
                        href="https://www.linkedin.com/in/adam-tarpey-ba134b86/"
                        target="_blank"
                      >
                        My Linkedin
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="https://github.com/adamman722" target="_blank">
                        My Github
                      </a>
                      <li>Don't worry each link will take you to new tab...</li>
                      <li>...as it is suppose to do.</li>
                    </li>
                  </ul>
                </Paper>
              </Grid>
            </Grid>
          </Container>
          <Copyright sx={{ pt: 4, color: "white" }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function AboutMe_page() {
  return <DashboardContent />;
}

// (theme) =>
//                 theme.palette.mode === "light"
//                   ? theme.palette.grey[100]
//                   : theme.palette.grey[900],
