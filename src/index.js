import React, {Component} from "react";
import ReactDOM from "react-dom";
import RepoBrowser from "./components/repobrowser";
import CodeBrowser from "./components/codebrowser";

import "./styles.css";

const rest_headers = new Headers({
    "Content-Type": "application/json"
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCommitSha: null,
            selectedPackages: []
        };
        this.handleSelectedCommitSha = this.handleSelectedCommitSha.bind(this);
    }

    handleSelectedCommitSha(sha) {
        this.setState({selectedCommitSha: sha});
        this.getCommitPackages(sha);
    }

    render() {
        return (
            <div className="App">
                <h1>spider-browser-react</h1>
                <RepoBrowser onSelectionChange={this.handleSelectedCommitSha}/>
                <CodeBrowser packages={this.state.selectedPackages}/>
            </div>
        );
    }

    getCommitPackages(commitId) {
        fetch("https://www.cloudctrl.com/git/commit/" + commitId, {
            crossDomain: true,
            method: "GET",
            rest_headers
        })
            .then(res => res.json())
            .then(data => {
                this.setState({selectedPackages: data.packages});
            });
    }

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
