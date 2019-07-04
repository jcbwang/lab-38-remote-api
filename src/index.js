import React from "react";
import ReactDOM from "react-dom";

import App from "./app.js";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import createStore from "./redux/create-store";

const store = createStore();

class Main extends React.Component {
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  rootElement
);

serviceWorker.unregister();
