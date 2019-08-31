import React from "react";
import {Link} from "react-router-dom";
import {Card} from 'react-bootstrap';
import { formatTimestamp} from "../utils/format";
import CodeBrowser from "./codebrowser";

const CommitParentsList = ({commit}) => {
    if (commit.parents.length === 0) {
        return ("");
    }
    const repo = commit.repo;
    return (<React.Fragment>
        Parents:
        {commit.parents.map(p => (
            <span key={p.sha}>
                {' '}
                <Link to={`/browse/${repo.domain}/${repo.owner}/${repo.name}/commit/${p.sha}`} >
                    {p.sha.substring(0, 7)}
                </Link>
            </span>
            ))}
    </React.Fragment>);
}

const CommitChildrenList = ({commit}) => {
    if (commit.children.length === 0) {
        return ("");
    }
    const repo = commit.repo;
    return (<React.Fragment>
        Children:
        {commit.children.map(p => (
            <span key={p.sha}>
                {' '}
                <Link to={`/browse/${repo.domain}/${repo.owner}/${repo.name}/commit/${p.sha}`} >
                    {p.sha.substring(0, 7)}
                </Link>
            </span>
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
                        Author:
                        <Link to={`/diff/${commit.repo.domain}/${commit.repo.owner}/${commit.repo.name}/commit/${commit.sha}`}>
                        {commit.authorName}
                        </Link>
                            <br/>
                        Datetime: {formatTimestamp(commit.datetime)}<br/>
                        Message: {commit.message}<br/>
                        <CommitParentsList commit={commit}/><br/>
                        <CommitChildrenList commit={commit}/>
                    </p>
                </Card.Body>
            </Card>
            <CodeBrowser packages={commit.packages}/>
        </React.Fragment>
    );
};

export default CommitCodeBrowser;
