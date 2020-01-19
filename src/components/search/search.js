import React, {useState} from "react";
import { Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {spiderFetch} from "../../utils/useFetch";
import SearchResults from "./searchresults";


const Search = () => {

    const [term, setTerm] = useState("");
    const [result, setResult] = useState({});

    const [fetchPackages, setFetchPackages] = useState(true);
    const [fetchClasses, setFetchClasses] = useState(true);
    const [fetchSelectors, setFetchSelectors] = useState(true);

    const doSearch = (seachtString) => {
        if (isValidTerm(seachtString)) {
            spiderFetch(`/core/search?q=${seachtString}`, data => {
                setResult(data);
            });
        } else {
            setResult({});
        }
    }

    const isValidTerm = (input) => {
        return input.length > 2;
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
        doSearch(event.target.value);
    }

    return (
        <React.Fragment>
            <Form>
                <Form.Row>
                    <Col>
                        <Form.Control autoFocus placeholder="Search" onChange={(event) => handleChange(event)} />
                    </Col>
                </Form.Row>
            </Form>
            <SearchResults results={result} />
        </React.Fragment>
    );
};

export default Search;
