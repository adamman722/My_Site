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
import NotificationsIcon from "@mui/icons-material/Notifications";
import myVideo from "../Media_Videos/video.mp4";

import ReactPlayer from "react-player";

import {
  mainListItems,
  secondaryListItems,
} from "../Dashboard_functions/listItems";
// import Chart from "./Chart";
// import Deposits from "./Deposits";
// import Orders from "./Orders";

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

const drawerWidth = 240;

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
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="absolute"
          open={open}
          style={{ backgroundColor: "hotpink" }}
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
              Welcome to my page!
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
            backgroundColor: "#252422",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",

            padding: "10px",
          }}
        >
          <Toolbar />

          <Container maxWidth="lg" sx={{ mt: 4, mb: 4, display: " contents" }}>
            <Grid container spacing={2}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={3.4} alignItems="flex-start">
                <Paper
                  sx={{
                    boxShadow:
                      "4px 4px 3px 0px rgb(255 105 180 / 60%), 0px 1px 1px 0px rgb(255 105 180 / 82%), 4px 1px 3px 0px rgb(255 105 180 / 70%)",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 580,
                  }}
                >
                  <ReactPlayer controls url={myVideo} style={{}} />
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatum commodi impedit est iure praesentium, cum vitae eum
                  odio eligendi. Hic, quo quidem a non distinctio pariatur
                  voluptas dolorem? Ratione minus modi quia nemo eveniet, totam
                  maiores accusamus exercitationem magnam consequatur aut,
                  perferendis laudantium, tenetur distinctio rem a laborum
                  voluptatum facere quos. Vitae assumenda illo, officiis
                  expedita quo molestiae similique neque.
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={2}>
                <Paper
                  sx={{
                    boxShadow:
                      "4px 4px 3px 0px rgb(255 105 180 / 60%), 0px 1px 1px 0px rgb(255 105 180 / 82%), 4px 1px 3px 0px rgb(255 105 180 / 70%)",
                    p: 2,
                    display: "inline-table",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                  sit vitae ab eveniet recusandae iste, natus labore sed
                  reiciendis animi eligendi fuga ratione atque eum, eius
                  dignissimos molestiae ipsum magnam eos veritatis excepturi
                  porro mollitia. Reprehenderit, veritatis! Pariatur cupiditate
                  impedit explicabo, quasi laudantium quae voluptates totam
                  consectetur nisi perferendis exercitationem ipsa repudiandae,
                  laboriosam vitae distinctio doloremque earum voluptatem
                  necessitatibus sed!
                </Paper>
              </Grid>

              <Grid item xs={"auto"} md={"auto"} lg={2}>
                <Paper
                  sx={{
                    boxShadow:
                      "4px 4px 3px 0px rgb(255 105 180 / 60%), 0px 1px 1px 0px rgb(255 105 180 / 82%), 4px 1px 3px 0px rgb(255 105 180 / 70%)",
                    p: 2,
                    display: "inline-table",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                  sit vitae ab eveniet recusandae iste, natus labore sed
                  reiciendis animi eligendi fuga ratione atque eum, eius
                  dignissimos molestiae ipsum magnam eos veritatis excepturi
                  porro mollitia. Reprehenderit, veritatis! Pariatur cupiditate
                  impedit explicabo, quasi laudantium quae voluptates totam
                  consectetur nisi perferendis exercitationem ipsa repudiandae,
                  laboriosam vitae distinctio doloremque earum voluptatem
                  necessitatibus sed!
                </Paper>
              </Grid>
              {/* Recent Orders */}

              <Grid item xs={11}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    boxShadow:
                      "4px 4px 3px 0px rgb(255 105 180 / 60%), 0px 1px 1px 0px rgb(255 105 180 / 82%), 4px 1px 3px 0px rgb(255 105 180 / 70%)",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                  sit vitae ab eveniet recusandae iste, natus labore sed
                  reiciendis animi eligendi fuga ratione atque eum, eius
                  dignissimos molestiae ipsum magnam eos veritatis excepturi
                  porro mollitia. Reprehenderit, veritatis! Pariatur cupiditate
                  impedit explicabo, quasi laudantium quae voluptates totam
                  consectetur nisi perferendis exercitationem ipsa repudiandae,
                  laboriosam vitae distinctio doloremque earum voluptatem
                  necessitatibus sed!
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

export default function Dashboard() {
  return <DashboardContent />;
}

// (theme) =>
//                 theme.palette.mode === "light"
//                   ? theme.palette.grey[100]
//                   : theme.palette.grey[900],
