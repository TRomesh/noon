import React, { Component } from "react";
import HomeContainer from "./containers/homeContainer";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
const history = createBrowserHistory({});

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
        </Switch>
      </Router>
    );
  }
}

export default App;
