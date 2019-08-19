import React from "react";
import {Link} from "react-router-dom";
import {Card} from 'react-bootstrap';
import CodeBrowser from "./codebrowser";

const CommitParentsList = ({commit}) => {
    if (commit.parents.length === 0) {
        return ("");
    }
    const repo = commit.repo;
    return (<React.Fragment>
        Parents:
        {commit.parents.map(p => (
            <React.Fragment>
                {' '}
                <Link to={`/browse/${repo.domain}/${repo.owner}/${repo.name}/commit/${p.sha}`} key={"p.sha"}>
                    {p.sha.substring(0, 7)}
                </Link>
            </React.Fragment>
            ))}
    </React.Fragment>);
}

const CommitCodeBrowser = ({commit}) => {

    if (!commit) {
        return (<div/>);
    }
    const title = commit.repo ?
        (<React.Fragment>
            Code browser {commit.repo.domain} / {commit.repo.owner} / {commit.repo.name}
        </React.Fragment>) :
        (<React.Fragment>
            Code browser
        </React.Fragment>);

    return (
        <React.Fragment>
            <Card>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <p>
                        Author: {commit.authorName}<br/>
                        Datetime: {commit.datetime}<br/>
                        Message: {commit.message}<br/>
                        <CommitParentsList commit={commit}/>
                    </p>
                </Card.Body>
            </Card>
            <CodeBrowser packages={commit.packages}/>
        </React.Fragment>
    );
};

export default CommitCodeBrowser;
