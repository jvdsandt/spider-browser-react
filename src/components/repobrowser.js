import React from "react";
import RepoList from "./repolist";

const rest_headers = new Headers({
  "Content-Type": "application/json"
});

class RepoBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      selectedRepo: null
    };
    this.handleSelectedRepoChange = this.handleSelectedRepoChange.bind(this);
  }

  handleSelectedRepoChange(repo) {
    this.setState({ selecteRepo: repo });
  }

  render() {
    return (
      <div>
        <h1>Repos</h1>
        <RepoList
          repos={this.state.repos}
          onSelectionChange={this.handleSelectedRepoChange}
        />
      </div>
    );
  }

  componentDidMount() {
    fetch("https://www.cloudctrl.com/git/repos", {
      crossDomain: true,
      method: "GET",
      rest_headers
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ repos: data });
      });
  }
}

export default RepoBrowser;
