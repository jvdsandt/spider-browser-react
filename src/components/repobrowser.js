import React from "react";
import {Row, Col} from 'react-bootstrap';
import RepoList from "./repolist";
import RepoDetails from "./repodetails";

const rest_headers = new Headers({
    "Content-Type": "application/json"
});

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
                <Row style={{"height":"300px"}}>
                    <Col style={{"height":"100%"}}>
                        <RepoList
                            repos={this.state.repos}
                            onSelectionChange={this.handleSelectedRepoChange}
                        />
                    </Col>
                    <Col>
                        <RepoDetails
                            repo={this.state.selectedRepoDetails}
                            onSelectionChange={this.props.onSelectionChange}
                        />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }

    componentDidMount() {
        fetch("https://www.cloudctrl.com/git/repos", {
            crossDomain: true,
            method: "GET",
            rest_headers
        })
            .then(res => res.json())
            .then(data => {
                this.setState({repos: data});
            });
    }

    getRepoDetails(repo) {
        fetch(
            "https://www.cloudctrl.com/git/repos/" +
            repo.domain +
            "/" +
            repo.owner +
            "/" +
            repo.name,
            {
                crossDomain: true,
                method: "GET",
                rest_headers
            }
        )
            .then(res => res.json())
            .then(data => {
                this.setState({selectedRepoDetails: data});
            });
    }
}

export default RepoBrowser;
