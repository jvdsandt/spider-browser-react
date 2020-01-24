import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Container, Card} from 'react-bootstrap';
import {spiderFetch, useFetch} from "../utils/useFetch";
import RepoBrowser from "./repobrowser";
import Search from "../panels/search/search.js";
import CommitCodeBrowser from "./commitcodebrowser";
import Topmenu from "./topmenu/topmenu";
import PackageInfo from "../panels/packageinfo";
import GitAuthorInfo from "../panels/gitauthorinfo";
import MCAuthorInfo from "../panels/mcauthorinfo";
import GitRepoInfo from "../panels/gitrepoinfo";
import ClassInfo from "../panels/classinfo";

function getCommitPackages(repo, commitId, setter) {
    spiderFetch(`/git/repos/${repo.domain}/${repo.owner}/${repo.name}/commit/${commitId}`, setter);
}

const Main = () => {
    return (
        <Router basename="/spider">
            <Topmenu/>
            <Container>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/index.html" component={Home}/>
                    <Route path="/browse/:domain/:owner/:name/commit/:commitId" component={BrowseCommit}/>
                    <Route path="/browse/:domain/:owner/:name/branch/:branch" component={BrowseBranch}/>
                    <Route path="/browse/:domain/:owner/:name/tag/:tag" component={BrowseTag}/>
                    <Route path="/search" component={SearchPanel}/>
                    <Route path="/package_names/:name" component={PackageInfo} />
                    <Route path="/class_names/:name" component={ClassInfo} />
                    <Route path="/mc_authors/:name" component={MCAuthorInfo} />
                    <Route path="/git_repos/:domain/:owner/:name" component={GitRepoInfo} />
                    <Route path="/git_authors/:name" component={GitAuthorInfo} />
                </Switch>
                </Container>
        </Router>
    );
}

const Home = () => {

    const [selectedCommit, setSelectedCommit] = useState(null);

    return (
        <React.Fragment>
            <h1>spider-browser-react</h1>
            <RepoBrowser onSelectionChange={(repo, commitId) => getCommitPackages(repo, commitId, setSelectedCommit)}/>
            {selectedCommit && (
                <CommitCodeBrowser commit={selectedCommit}/>
            )}
        </React.Fragment>
    );
}

const BrowseCommit = ({match}) => {

    const {data, loading} = useFetch(`/git/repos/${match.params.domain}/${match.params.owner}/${match.params.name}/commit/${match.params.commitId}`);

    return loading ? (<Container fluid>
        <Card>
            <Card.Body>
                <Card.Title>Loading ...</Card.Title>
                <p>domain: {match.params.domain}</p>
                <p>owner: {match.params.owner}</p>
                <p>name: {match.params.name}</p>
                <p>commitId: {match.params.commitId}</p>
            </Card.Body>
        </Card>
    </Container>) : (
        <Container fluid><CommitCodeBrowser commit={data}/></Container>
    )
}

const BrowseBranch = ({match}) => {

    const {data, loading} = useFetch(`/git/repos/${match.params.domain}/${match.params.owner}/${match.params.name}/branch/${match.params.branch}`);

    return loading ? (<div>
        <h1>Loading ...</h1>
        <p>domain: {match.params.domain}</p>
        <p>owner: {match.params.owner}</p>
        <p>name: {match.params.name}</p>
        <p>branch: {match.params.branch}</p>
    </div>) : (
        <Container fluid><CommitCodeBrowser commit={data.commit}/></Container>
    )
}

const BrowseTag = ({match}) => {

    const {data, loading} = useFetch(`/git/repos/${match.params.domain}/${match.params.owner}/${match.params.name}/tag/${match.params.tag}`);

    return loading ? (<div>
        <h1>Loading ...</h1>
        <p>domain: {match.params.domain}</p>
        <p>owner: {match.params.owner}</p>
        <p>name: {match.params.name}</p>
        <p>tag: {match.params.tag}</p>
    </div>) : (
        <Container fluid><CommitCodeBrowser commit={data.commit}/></Container>
    )
}

const SearchPanel = () => {

    return (
        <React.Fragment>
            <h1>spider-browser-react - Search</h1>
            <Search/>
        </React.Fragment>
    );
}

export default Main;