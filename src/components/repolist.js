import React from "react";

const RepoList = ({ repos, onSelectionChange }) => {
  return (
    <div>
      <div style={{ height: "300px", overflowY: "scroll" }}>
        {repos.map(repo => (
          <div key={repo.id}>
            <button onClick={() => onSelectionChange(repo)}>
              {repo.domain} / {repo.owner} / {repo.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepoList;
