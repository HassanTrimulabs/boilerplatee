import React from "react";
import { Route, Switch, Router } from "react-router";
import { createBrowserHistory } from "history";
import "./App.css";
import ROUTES from "./routes";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          {ROUTES.map((route) => {
            const { component, exact, path } = route;

            return (
              <Route
                path={path}
                exact={exact}
                key={path}
                component={component}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
