import React from "react";
import {Card} from 'react-bootstrap';
import CodeBrowser from "./codebrowser";

const CommitCodeBrowser = ({commit}) => {

    if (!commit) {
        return (<div/>);
    }
    const parents = commit.parents.length == 0 ?
        ("") :
        (<React.Fragment>
            Parents:
            {commit.parents.map(p => (
                <span key={"p.sha"}> {p.sha.substring(0,7)}</span>
            ))}
        </React.Fragment>);

    return (
        <React.Fragment>
            <Card>
                <Card.Body>
                    <Card.Title>Code browser</Card.Title>
                    <p>
                        Author: {commit.authorName}<br/>
                        Datetime: {commit.datetime}<br/>
                        Message: {commit.message}<br/>
                        {parents}
                    </p>
                </Card.Body>
            </Card>
            <CodeBrowser packages={commit.packages}/>
        </React.Fragment>
    );
};

export default CommitCodeBrowser;
