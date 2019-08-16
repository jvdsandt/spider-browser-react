import React from "react";
import { ListGroup } from 'react-bootstrap';

const RepoList = ({ repos, onSelectionChange }) => {
  return (
    <ListGroup variant="spider">
        {repos.map(repo => (
          <ListGroup.Item key={repo.id} variant="spider" action onClick={() => onSelectionChange(repo)}>
              {repo.domain} / {repo.owner} / {repo.name}
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
};

export default RepoList;
