import React, { useEffect } from "react";
// import { ThemeProvider } from '@mui/material/styles';

//Routes
import Routes from "./routes";
// import routes from './routes'
import { useRoutes } from "react-router";


//Material UI
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import { createCustomTheme } from '../config/theme';

import RTL from './RTL'
import SettingsDrawer from './SettingsDrawer'
import { THEMES } from '../config/theme/constants';
import ErrorBoundary from "./Errorbound";
import useSettings from "./hooks/useSettings";
<<<<<<< HEAD
=======
import DashboardLayout from "./Component/DashBoard/Layout";
import Agenda from "./Component/Agenda";
>>>>>>> 8ee5342f54cfe74f1fd14c0725834bfb364cf72f

function App(props) {

    const { settings } = useSettings();

    // const theme = createCustomTheme({
    //     theme: THEMES.LIGHT
    // });

    const theme = createCustomTheme({
        direction: settings.direction,
        responsiveFontSizes: settings.responsiveFontSizes,
        roundedCorners: settings.roundedCorners,
        theme: settings.theme
    });

    const content = useRoutes(Routes);

    useEffect(() => {
        console.log('app.js')
    })

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
};

export default App;