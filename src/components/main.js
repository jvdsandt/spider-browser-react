import React, {useState, useEffect} from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';
import {spiderFetch, useFetch } from "../utils/useFetch";
import RepoBrowser from "./repobrowser";
import CommitCodeBrowser from "./commitcodebrowser";

function getCommitPackages(repo, commitId, setter) {
    spiderFetch(`/git/repos/${repo.domain}/${repo.owner}/${repo.name}/commit/${commitId}`, setter);
}

const Main = () => {
    return (
        <Router>
            <Route exact path="/" component={Home}/>
            <Route path="/index.html" component={Home}/>
            <Route path="/browse/:domain/:owner/:name/commit/:commitId" component={BrowseCommit}/>
        </Router>
    );
}

const Home = () => {

    const [selectedCommit, setSelectedCommit] = useState(null);

    return (
        <Container>
            <h1>spider-browser-react</h1>
            <RepoBrowser onSelectionChange={(repo, commitId) => getCommitPackages(repo, commitId, setSelectedCommit)}/>
            {selectedCommit && (
                <CommitCodeBrowser commit={selectedCommit}/>
            )}
        </Container>
    );
}

const BrowseCommit = ({match}) => {

    const {data, loading} = useFetch(`/git/repos/${match.params.domain}/${match.params.owner}/${match.params.name}/commit/${match.params.commitId}`);

    return loading ? (<div>
        <h1>Loading ...</h1>
        <p>domain: {match.params.domain}</p>
        <p>owner: {match.params.owner}</p>
        <p>name: {match.params.name}</p>
        <p>commitId: {match.params.commitId}</p>
    </div>) : (
        <Container fluid><CommitCodeBrowser commit={data}/></Container>
    )
}

export default Main;