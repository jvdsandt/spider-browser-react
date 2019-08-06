import React, { Component } from "react";
import ReactDOM from "react-dom";
import Repos from "./components/repos";

import "./styles.css";

const headers = new Headers({
  "Content-Type": "application/json"
});

class App extends Component {
  state = {
    repos: [
      {
        id: 74,
        name: "QCMagritte",
        owner: "Afibre",
        domain: "GitHub",
        url: "https://github.com/Afibre/QCMagritte.git"
      },
      {
        id: 31,
        name: "Pharo-OS-Windows",
        owner: "astares",
        domain: "GitHub",
        url: "https://github.com/astares/Pharo-OS-Windows.git"
      },
      {
        id: 13,
        name: "Renraku",
        owner: "Uko",
        domain: "GitHub",
        url: "https://github.com/Uko/Renraku.git"
      },
      {
        id: 28,
        name: "Teapot",
        owner: "zeroflag",
        domain: "GitHub",
        url: "https://github.com/zeroflag/Teapot.git"
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>spider-browser-react</h1>
        <h2>List of repositories:</h2>
        <Repos repos={this.state.repos} />
      </div>
    );
  }
  /**
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
*/
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
