import React, {useState, useEffect} from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from "react-router-dom";
import RepoBrowser from "./repobrowser";
import CodeBrowser from "./codebrowser";

const rest_headers = new Headers({
    "Content-Type": "application/json"
});

function spiderFetch(path, setter) {
    fetch("https://www.cloudctrl.com" + path, {
        crossDomain: true,
        method: "GET",
        rest_headers
    })
        .then(res => res.json())
        .then(data => setter(data));
}

function getCommitPackages(commitId, setter) {
    spiderFetch("/git/commit/" + commitId, setter);
}

function useFetch(path) {
    const url = "https://www.cloudctrl.com" + path;
    const [data, setDataState] = useState(null);
    const [loading, setLoadingState] = useState(true);
    useEffect(
        () => {
            setLoadingState(true);
            fetch(url)
                .then(j => j.json())
                .then(data => {
                    setDataState(data);
                    setLoadingState(false);
                });
        },
        [url]
    );
    return { data, loading };
}

const Main = () => {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/index.html" component={Home} />
            <Route path="/browse/:domain/:owner/:name/commit/:commitId" component={BrowseCommit} />
        </Router>
    );
}

const Home = () => {

    const [selectedCommit, setSelectedCommit] = useState(null);

    return (
        <div className="App">
            <h1>spider-browser-react</h1>
            <RepoBrowser onSelectionChange={commitId => getCommitPackages(commitId, setSelectedCommit)}/>
            {selectedCommit && (
                <CodeBrowser packages={selectedCommit.packages}/>
            )}
        </div>
    );
}

const BrowseCommit = ({ match }) => {

    const {data, loading} = useFetch(`/git/repos/${match.params.domain}/${match.params.owner}/${match.params.name}/commit/${match.params.commitId}`);

    return loading ? (<div>
        <h1>Loading ...</h1>
        <p>domain: {match.params.domain}</p>
        <p>owner: {match.params.owner}</p>
        <p>name: {match.params.name}</p>
        <p>commitId: {match.params.commitId}</p>
    </div>) : (
        <CodeBrowser packages={data.packages}/>
    )
}

export default Main;