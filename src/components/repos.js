import React from "react";

class Repos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedRepoId: null };
  }

  selectRepo(repoId) {
    this.setState({
      selectedRepoId: repoId
    });
  }

  render() {
    const repoList = (
      <div>
        {this.props.repos.map(repo => (
          <div>
            <a href="#" onClick={e => this.selectRepo(repo.id)}>
              {repo.domain} / {repo.owner} / {repo.name}
            </a>
          </div>
        ))}
      </div>
    );

    return (
      <div>
        <h1>Repos</h1>
        {repoList}
        <p>Select repo: {this.state.selectedRepoId}</p>
      </div>
    );
  }
}

export default Repos;
