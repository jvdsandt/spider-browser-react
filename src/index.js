import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const headers = new Headers({
  "Content-Type": "application/json"
});

class App extends Component {
  state = {
    repos: []
  };

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }

  componentDidMount() {
    fetch("https://www.cloudctrl.com/git/repos", {
      crossDomain: true,
      method: "GET",
      headers
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ repos: data });
      });
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
