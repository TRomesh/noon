import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/store";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import pink from 'material-ui/colors/pink';
import green from 'material-ui/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: green
  }
});

const store = configureStore();

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
