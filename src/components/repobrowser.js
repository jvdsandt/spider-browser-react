import React from "react";
import RepoList from "./repolist";
import RepoDetails from "./repodetails";

const rest_headers = new Headers({
  "Content-Type": "application/json"
});

class RepoBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      selectedRepo: null,
      selectedRepoDetails: null
    };
    this.handleSelectedRepoChange = this.handleSelectedRepoChange.bind(this);
  }

  handleSelectedRepoChange(repo) {
    this.setState({ selectedRepo: repo });
    this.getRepoDetails(repo);
  }

  render() {
    return (
      <div>
        <h2>Repositories</h2>
        <div style={{ display: "flex" }}>
          <div
            style={{
              flexGrow: "2",
              border: "1px solid black",
              padding: "2px"
            }}
          >
            <RepoList
              repos={this.state.repos}
              onSelectionChange={this.handleSelectedRepoChange}
            />
          </div>
          <div
            style={{
              flexGrow: "3",
              border: "1px solid black",
              padding: "2px"
            }}
          >
            <RepoDetails
              repo={this.state.selectedRepoDetails}
              onSelectionChange={this.props.onSelectionChange}
            />
          </div>
        </div>
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

  getRepoDetails(repo) {
    fetch(
      "https://www.cloudctrl.com/git/repos/" +
        repo.domain +
        "/" +
        repo.owner +
        "/" +
        repo.name,
      {
        crossDomain: true,
        method: "GET",
        rest_headers
      }
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ selectedRepoDetails: data });
      });
  }
}

export default RepoBrowser;
