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

    const [packageNames, setPackageNames] = useState([]);
    const [classNames, setClassNames] = useState([]);
    const [selectors, setSelectors] = useState([]);

    const doSearch = (seachtString) => {
        if (seachtString.length > 2) {
            spiderFetch(`/core/search_names/${seachtString}`, data => {
                setResult(data);
            });
        } else {
            setResult({});
        }
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
                        <Form.Control placeholder="Search" onChange={(event) => handleChange(event)} />
                    </Col>
                </Form.Row>
            </Form>
            <SearchResults results={result} />
        </React.Fragment>
    );
};

export default Search;
