import './App.scss';
import React from "react";
import AccountPersonal from "./components/AccountPersonal"

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1 className="App-header-title">Your account</h1>
      </header>
      <AccountPersonal/>
    </div>
  );
}

export default App;
