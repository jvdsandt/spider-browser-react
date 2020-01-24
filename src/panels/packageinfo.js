import React from "react";
import {useFetch} from "../utils/useFetch";
import {formatSha, formatTimestamp} from "../utils/format";
import {Card, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

const CommaIfNotLast = ({ list, index }) => {
    //console.log("list.length = " + list.length + " index = " + index)
    if (list.length === index+1) {
        return null;
    }
    return (<React.Fragment>, </React.Fragment>);
};

const GitCommitLine = ({ titlePrefix, commit }) => {
    return (
        <React.Fragment>
            <div className="d-flex w-100 justify-content-between">
                <h5>{titlePrefix}{formatTimestamp(commit.datetime)} by {commit.authorName}</h5>
                <small>{formatSha(commit.sha)}</small>
            </div>
            <p>{commit.messageLine}</p>
        </React.Fragment>
    );
};

const MCPackageLine = ({ titlePrefix, mcPackage }) => {
    return (
        <React.Fragment>
            <div className="d-flex w-100 justify-content-between">
                <h5>{titlePrefix}{formatTimestamp(mcPackage.datetime)} by {mcPackage.author}</h5>
                <small>{formatSha(mcPackage.uuid)}</small>
            </div>
            <p>{mcPackage.message}</p>
        </React.Fragment>
    );
};

const GitRepoList = ({ list}) => {
    return (
        <Card>
            <Card.Header><strong>Git Repositories</strong></Card.Header>
            <ListGroup>
                {list.map(each => (
                    <ListGroup.Item>{each.domain} / {each.owner} / {each.name}</ListGroup.Item>
                ))}
            </ListGroup>
        </Card>
    );
};

const MCRepoList = ({ list}) => {
    return (
        <Card>
            <Card.Header><strong>Monticello Repositories</strong></Card.Header>
            <ListGroup>
                {list.map(each => (
                    <ListGroup.Item>{each.repoUrl}</ListGroup.Item>
                ))}
            </ListGroup>
        </Card>
    );
}


const GitAuthorsList = ({ list }) => {
    return (
        <React.Fragment>
            {list.map((each, index) => (
                <React.Fragment key={index}>
                    <Link to={"/git_authors/" + each.author}>{each.author}</Link> ({each.count})
                    <CommaIfNotLast list={list} index={index} />
                </React.Fragment>
            ))}
        </React.Fragment>
    );
};

const MCAuthorsList = ({ list }) => {
    return (
        <React.Fragment>
            {list.map((each, index) => (
                <React.Fragment key={index}>
                    <Link to={"/mc_authors/" + each.author}>{each.author}</Link> ({each.count})
                    <CommaIfNotLast list={list} index={index} />
                </React.Fragment>
            ))}
        </React.Fragment>
    );
};

const PackageGitInfo = ({ data }) => {

    return (
        <React.Fragment>
            <GitRepoList list={data.gitRepos} />
            <Card>
                <Card.Header><strong>Git Commits</strong></Card.Header>
                <ListGroup>
                    <ListGroup.Item><GitCommitLine titlePrefix="Oldest Commit: " commit={data.oldestGitCommit} /></ListGroup.Item>
                    <ListGroup.Item><GitCommitLine titlePrefix="Newest Commit: " commit={data.newestGitCommit}/></ListGroup.Item>
                    <ListGroup.Item>Authors: <GitAuthorsList list={data.gitAuthors}/></ListGroup.Item>
                </ListGroup>
            </Card>
        </React.Fragment>
    );
};

const PackageMCInfo = ({ data }) => {

    return (
        <React.Fragment>
            <MCRepoList list={data.mcRepos} />
            <Card>
                <Card.Header><strong>Monticello Packages</strong></Card.Header>
                <ListGroup>
                    <ListGroup.Item><MCPackageLine titlePrefix="Oldest: " mcPackage={data.oldestMCPackage} /></ListGroup.Item>
                    <ListGroup.Item><MCPackageLine titlePrefix="Newest: " mcPackage={data.newestMCPackage}/></ListGroup.Item>
                    <ListGroup.Item>Author(s): <MCAuthorsList list={data.mcAuthors}/></ListGroup.Item>
                </ListGroup>
            </Card>
        </React.Fragment>
    );
};


const PackageInfo = ({ match }) => {

    const {data, loading} = useFetch(`/core/package_names/${match.params.name}`);

    if (loading) {
        return (
            <React.Fragment>
                <h3>Package: {match.params.name}</h3>
                <p>Loading ...</p>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <h3>Package: {data.name}</h3>
            {data.oldestGitCommit &&
                <PackageGitInfo data={data} />
            }
            {data.oldestMCPackage &&
                <PackageMCInfo data={data} />
            }
        </React.Fragment>
    );
};

export default PackageInfo;