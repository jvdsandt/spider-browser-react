import React from "react";

class RepoDetails extends React.Component {
    constructor(props) {
        super(props);
        this.selectCommitSha = this.selectCommitSha.bind(this);
    }

    selectCommitSha(sha) {
        this.props.onSelectionChange(sha);
    }

    render() {
        const repo = this.props.repo;
        if (repo === null) {
            return (<p>nothing selected!</p>);
        }
        const branchList = (
            <div>
                {repo.branches.map(each => (
                    <div>
                        {each.name} {each.datetime}
                        <a href="#" onClick={e => this.selectCommitSha(each.sha)}>{each.sha.substring(0,7)}</a>
                    </div>
                ))}
            </div>);
        return (
            <div>
                <p><strong>{repo.domain} / {repo.owner} / <a href={repo.url} target="_blank">{repo.name}</a></strong></p>
                <h4>Branches:</h4>
                {branchList}
            </div>
        );
    }
}

export default RepoDetails;
