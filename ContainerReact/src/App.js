import React, { useState, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Auth from "./components/AuthApp";
import Map from "./components/MapApp";

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/map");
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/">
              <Auth onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/map">
              <Map />
            </Route>
          </Switch>
        </div>
    </Router>
  );
};
