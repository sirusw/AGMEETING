import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import Land from './Land';

// import "./styles.scss";

const routes = (
    /*Main.js will server as the "base" compoent for the rest of the application, Route components can be added in here to specify which components should be rendered for different routes 
    https://reactrouter.com/web/guides/quick-start the documentation for react router is pretty good*/
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/landing">
                {/*what a route renders can also be specified like this, allowing you to pass props etc*/}
                <Land testProp={"test"}></Land>
            </Route>
        </Switch>
    </Router>
);

ReactDOM.render(routes, document.getElementById("root"));