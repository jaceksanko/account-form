import './App.scss';
import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";

import AccountPersonal from "./components/AccountPersonal";
import AccountBasic from "./components/AccountBasic"
import AccountDetails from "./components/AccountDetails"

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1 className="App-header-title">Your account</h1>
      </header>
            <Switch>
                <Route path="/basic">
                    <AccountBasic/>
                </Route>
                <Route path="/details">
                    <AccountDetails/>
                </Route>
                <Route path="/">
                    <AccountPersonal/>
                </Route>

            </Switch>
    </div>
  );
}

export default App;
