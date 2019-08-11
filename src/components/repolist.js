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
      <div style={{ "max-height": "20em", "overflow-y": "scroll" }}>
        {this.props.repos.map(repo => (
          <div>
            <a href="#" onClick={_e => this.selectRepo(repo)}>
              {repo.domain} / {repo.owner} / {repo.name}
            </a>
          </div>
        ))}
      </div>
    );

    return (
      <div>
        {repoList}
      </div>
    );
  }
}

export default RepoList;
