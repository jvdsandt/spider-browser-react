import React from "react";
import {Row, Col} from 'react-bootstrap';
import {spiderFetch, useFetch} from "../utils/useFetch";
import RepoList from "./repolist";
import RepoDetails from "./repodetails";

class RepoBrowser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            selectedRepo: null,
            selectedRepoDetails: null
        };
        this.handleSelectedRepoChange = this.handleSelectedRepoChange.bind(this);
    }

    handleSelectedRepoChange(repo) {
        this.setState({selectedRepo: repo});
        this.getRepoDetails(repo);
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <h2>Repositories</h2>
                    </Col>
                </Row>
                <Row style={{"height": "300px"}}>
                    <Col style={{"height": "100%"}}>
                        <RepoList
                            repos={this.state.repos}
                            onSelectionChange={this.handleSelectedRepoChange}
                        />
                    </Col>
                    <Col>
                        <RepoDetails
                            repo={this.state.selectedRepoDetails}
                            onSelectionChange={(sha) => this.props.onSelectionChange(this.state.selectedRepo, sha)}
                        />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }

    componentDidMount() {
        spiderFetch("/git/repos", data => {
            this.setState({repos: data.list});
        });
    }

    getRepoDetails(repo) {
        spiderFetch(`/git/repos/${repo.domain}/${repo.owner}/${repo.name}`, data => {
            this.setState({selectedRepoDetails: data});
        });
    }
}

export default RepoBrowser;
