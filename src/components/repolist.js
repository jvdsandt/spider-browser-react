import React from "react";

class RepoList extends React.Component {
  constructor(props) {
    super(props);
    this.selectRepo = this.selectRepo.bind(this);
  }

  selectRepo(repo) {
    this.props.onSelectionChange(repo);
  }

  render() {
    const repoList = (
      <div style={{ height: "300px", "overflowY": "scroll" }}>
        {this.props.repos.map(repo => (
          <div key={repo.id}>
            <button onClick={_e => this.selectRepo(repo)}>
              {repo.domain} / {repo.owner} / {repo.name}
            </button>
          </div>
        ))}
      </div>
    );

    return <div>{repoList}</div>;
  }
}

export default RepoList;
