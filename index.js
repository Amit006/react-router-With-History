import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import { createBrowserHistory } from "history";
import { Route, Switch, Router, Redirect } from "react-router-dom";
export const history = createBrowserHistory();
import home from "./home";
import mahi from "./mahi";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
          <Router history={history}>
            <Switch>
              {" "}
              //it return 1st matched value
              <Route path={"/home"} component={home} exact />
              <Route path={"/mahi"} component={mahi} exact />
              <Route
                path="*"
                render={() => (
                  <div>
                    <p> **** </p>
                  </div>
                )}
              />
            </Switch>
          </Router>
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
