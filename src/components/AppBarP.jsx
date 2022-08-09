import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import AdbIcon from "@mui/icons-material/Adb";

export default function AppBarP() {
  return (
    <AppBar color="transparent" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <img
              alt="logotipo"
              style={{ width: 120 }}
              src={require("../assets/logo.png")}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
