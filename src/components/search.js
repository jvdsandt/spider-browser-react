import React, {useState} from "react";
import { Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {spiderFetch} from "../utils/useFetch";


const Search = () => {

    const [term, setTerm] = useState("");
    const [result, setResult] = useState({});

    const [fetchPackages, setFetchPackages] = useState(true);
    const [fetchClasses, setFetchClasses] = useState(true);
    const [fetchSelectors, setFetchSelectors] = useState(true);

    const [packageNames, setPackageNames] = useState([]);
    const [classNames, setClassNames] = useState([]);
    const [selectors, setSelectors] = useState([]);

    const doSearch = () => {
        if (term.length > 2) {
            spiderFetch(`/search_names/${term}`, data => {
                setResult(data);
            });
        } else {
            setResult({});
        }
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
        doSearch(term);
    }

    return (
        <Form>
            <Form.Row>
                <Col>
                    Value: {term}
                    <Form.Control placeholder="Search" onChange={(event) => handleChange(event)} />
                </Col>
            </Form.Row>
        </Form>
    );
};

export default Search;
