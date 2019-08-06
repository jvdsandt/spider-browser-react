import React from "react";

function Repos(props) {
  const repoList = (
    <div>
      {props.repos.map(repo => (
        <div>
          <a href="#" onClick={() => this.selectRepo({ repoId: repo.id })}>
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
    </div>
  );
}

export default Repos;
