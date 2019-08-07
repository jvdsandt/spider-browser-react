import React, { Component } from "react";
import ReactDOM from "react-dom";
import RepoBrowser from "./components/repobrowser";
import CodeBrowser from "./components/codebrowser";

import "./styles.css";

class App extends Component {
  state = {
    repos: []
  };

  render() {
    return (
      <div className="App">
        <h1>spider-browser-react</h1>
        <RepoBrowser />
        <CodeBrowser />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
