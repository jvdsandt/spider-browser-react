import React from "react";
import Repos from "repos";

class RepoBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedRepoId: null };
  }

  render() {
    return (
      <div>
        <h1>Repos</h1>
        {repoList}
        <p>Select repo: {this.state.selectedRepoId}</p>
      </div>
    );
  }
