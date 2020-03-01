import React, {useState} from "react";
import { Form, Col, Table } from 'react-bootstrap';
import {spiderFetch} from "../utils/useFetch";
import GitRepoLink from "../components/gitrepolink";

const GitRepoList = ({ data }) => {
    if (data == null) {
        return null;
    }
    if (data.list == null || data.list.length == 0) {
        return (<p>No repostories found.</p>);
    }
    return (
        <React.Fragment>
            <Table striped bordered size="sm">
            <tbody>
                {data.list.map(item => (
                    <tr>
                        <td><GitRepoLink key={item.id} repo={item} /></td>
                    </tr>
                ))}
            </tbody>
            </Table>
        </React.Fragment>
    );
};

const GitRepos = () => {

    const [term, setTerm] = useState("");
    const [result, setResult] = useState({});

    const doSearch = (seachtString) => {
        if (isValidTerm(seachtString)) {
            spiderFetch(`/git/repos?q=${seachtString}`, data => {
                setResult(data);
            });
        } else {
            setResult({});
        }
    }

    const isValidTerm = (input) => {
        return true;
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
        doSearch(event.target.value);
    }

    return (
        <React.Fragment>
            <h3>Git Repositories</h3>
            <Form>
                <Form.Row>
                    <Col>
                        <Form.Control autoFocus placeholder="Search" onChange={(event) => handleChange(event)} />
                    </Col>
                </Form.Row>
            </Form>
            <GitRepoList data={result} />
        </React.Fragment>
    );
};

export default GitRepos;
