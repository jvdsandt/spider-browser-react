import React from "react";
import {useFetch} from "../utils/useFetch";
import {formatSha, formatTimestamp} from "../utils/format";

const GitCommitLine = ({ commit }) => {



    return (
        <p>{formatSha(commit.sha)} {formatTimestamp(commit.datetime)} by {commit.authorName}</p>
    );

}

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
            <GitCommitLine commit={data.oldestGitCommit} />
            <GitCommitLine commit={data.newestGitCommit} />
            <p>{JSON.stringify(data)}</p>
        </React.Fragment>
    );
};

export default PackageInfo;