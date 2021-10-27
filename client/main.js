import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import Land from './Land';
// import "./styles.scss";

const routes = (
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/landing" component={Land}/>
        </Switch>
    </Router>
);

ReactDOM.render(routes, document.getElementById("root"));