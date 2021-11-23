import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import App from './App';
import Land from './Land';
import "../public/theme/styles.css";

import { Provider } from 'react-redux';
import store from './redux/store';

// import "./styles.scss";

import { StrictMode } from 'react'
// import LocalizationProvider from '@material'
import { SettingsProvider } from './contexts/SettingsContext';
import { StyledEngineProvider } from '@mui/styled-engine';

ReactDOM.render(
    <Provider store={store}>
    <StyledEngineProvider injectFirst>
        <SettingsProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </SettingsProvider>
    </StyledEngineProvider>
    </Provider>
    , document.getElementById("root"));