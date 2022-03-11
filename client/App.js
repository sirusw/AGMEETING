import React, {useEffect, useState} from "react";
// import { ThemeProvider } from '@mui/material/styles';
import { createBrowserHistory } from 'history';

//Routes
import Routes from "./routes";
// import routes from './routes'
import { useRoutes } from "react-router";
import {redirectLogin} from "../server/routes/redirectLogin";

//Material UI
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { createCustomTheme } from "../config/theme";

import RTL from "./RTL";
import SettingsDrawer from "./SettingsDrawer";
import { THEMES } from "../config/theme/constants";
import ErrorBoundary from "./Errorbound";
import useSettings from "./hooks/useSettings";

// Service
import {authenticationService} from "../server/services/authentication.service";
import {Navigate, useNavigate} from "react-router-dom";


function App() {

  const { settings } = useSettings();
  const navigate = useNavigate();

  const theme = createCustomTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    roundedCorners: settings.roundedCorners,
    theme: settings.theme,
  });

  const content = useRoutes(Routes);

  useEffect(() => {
    const currentUser = authenticationService.currentUserValue;
    console.log(currentUser);
    if (currentUser == null) {
      // not logged in so redirect to login page with the return url
      navigate("/login");
    }
  } ,[]);

  //This component basically contains the content for the entire application, wraps it in the theme provider.
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <RTL direction={settings.direction}>
          {/* <CssBaseline /> */}
          {/* <Toaster position="top-center" /> */}
          {/* <SettingsDrawer /> */}
          {content}
          {/* Declarative route */}
          {/* <Routes /> */}
        </RTL>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
