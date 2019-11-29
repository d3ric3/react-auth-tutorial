import React from 'react';
import ReactDOM from 'react-dom';
import { LandingPage } from "./landing.page";
import { AppLayout } from "./app.layout";
import { ProtectedRoute } from './proctected.route';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import './index.css';

function App() {
    return (
        <div className="App">
            <h1>Protected React Router</h1>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <ProtectedRoute exact path="/app" component={AppLayout} />
                <Route path="*" component={ () => { return "404 Not Found"; } } />
            </Switch>
        </div>
    );
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
