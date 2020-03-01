import React from "react";
import {Link} from "react-router-dom";

const GitRepoLink = ({ repo }) => {
    return (
        <Link to={"/git_repos/" + repo.domain + "/" + repo.owner + "/" + repo.name}>
            {repo.domain} / {repo.owner} / {repo.name}
        </Link>
    );
};

export default GitRepoLink;
