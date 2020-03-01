import {useFetch} from "../utils/useFetch";
import {Row,Col,Dropdown} from 'react-bootstrap';
import React, {useState} from "react";

const GitRepoFullname = (match) => {
    return match.params.domain + "/" + match.params.owner + "/" + match.params.name;
}

const GitRefSelector = ({ label, list, selected }) => {

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {label}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {list.map(item => (
                    <Dropdown.Item key={item.sha} href="#/action-1">{item.name}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

const GitRepoInfo = ({ match }) => {

    const {data, loading} = useFetch(`/git/repos/${match.params.domain}/${match.params.owner}/${match.params.name}`);

    const [selectedBranch, setSelectedBranch] = useState("");
    const [selectedTag, setSelectedTag] = useState({});

    if (loading) {
        return (
            <React.Fragment>
                <h3>Git repository: {GitRepoFullname(match)}</h3>
                <p>Loading ...</p>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <h3>Git repository: {GitRepoFullname(match)}</h3>
            <Row>
                <Col><GitRefSelector label="Branch" list={data.branches} selected={selectedBranch}/></Col>
                <Col><GitRefSelector label="Tag" list={data.tags} selected={selectedTag}/></Col>
            </Row>
            <p>{JSON.stringify(data)}</p>
        </React.Fragment>
    );
};

export default GitRepoInfo;