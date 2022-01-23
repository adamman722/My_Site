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

function BuildGrid(props) {
  return (
    <Box sx={{ display: "flex" }}>
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4}>
          {/* {About me card} */}

          <Grid
            item
            xs={0}
            md={0}
            lg={props.gideSize ? props.gideSize : "auto"}
            id="itemAuto"
          >
            <Paper
              sx={{
                boxShadow:
                  "4px 4px 3px 0px rgb(255 105 180 / 60%), 0px 1px 1px 0px rgb(255 105 180 / 82%), 4px 1px 3px 0px rgb(255 105 180 / 70%)",
                p: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {props.addedContent}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default BuildGrid;
