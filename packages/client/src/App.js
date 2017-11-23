import React, { Component } from "react";
import HomeContainer from "./containers/homeContainer";
import MainBrand from "./components/mainbrand";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Navigation from "../src/components/bottomnavigation";
import 'typeface-roboto';

const history = createBrowserHistory();

const App =()=> 
<Router history={history}>
  <Switch>
    <Navigation>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/brand" component={MainBrand} />
    </Navigation>
  </Switch>
</Router>;

export default App;
