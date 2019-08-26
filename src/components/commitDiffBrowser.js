import React from "react";
import {useFetch} from "../utils/useFetch";

function diffPackageName(diff) {
    return diff.newPackage ? diff.newPackage.name : diff.oldPackage.name;
}

const CommitDiffBrowser = ({ repo, commitId }) => {

    const {diffs, loading} = useFetch(`/git/diff/${repo.domain}/${repo.owner}/${repo.name}/commit/${commitId}`);

    if (loading) {
        return (<div>Loading ...</div>);
    }

    return (
        <div>
            {diffs.map(each => (
                <li>package: {diffPackageName(each)}</li>
            ))}
        </div>
    )
}

export default CommitDiffBrowser;