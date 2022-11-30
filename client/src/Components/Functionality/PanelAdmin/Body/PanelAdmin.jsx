import React from "react";
import { Route, Routes } from "react-router-dom"
import { ColorModeContext, useMode } from "../theme.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./PanelAdmin.css";
import TopBar from "../TopBar/index.jsx";
import SideBar from "../SideBar/index.jsx";
import Dashboard from "../Dashboard/index.jsx";

export default function PanelAdmin() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar/>
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
