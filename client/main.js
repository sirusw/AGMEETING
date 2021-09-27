import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
// import "./styles.scss";

const routes = (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
        </Switch>
    </Router>
);

ReactDOM.render(routes, document.getElementById("root"));