import React, {Component} from "react";
import ReactDOM from "react-dom";
import Repos from "./components/repos";
import CodeBrowser from "./components/codebrowser";

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
                <h1>spider-browser-react</h1>
                <h2>List of repositories:</h2>
                <Repos repos={this.state.repos}/>
                <CodeBrowser/>
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
                this.setState({repos: data});
            });
    }

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
