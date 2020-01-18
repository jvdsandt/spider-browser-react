import React, {useState} from "react";
import { Row, Col } from 'react-bootstrap';
import SearchResultList from "./searchresultlist";

const SearchResults = ({ results }) => {

    let packageList;
    if (results != null && "packageNames" in results) {
        packageList = <SearchResultList name="Packages" list={results.packageNames}/>;
    } else {
        packageList = "";
    }

    let classList;
    if (results != null && "classNames" in results) {
        classList = <SearchResultList name="Classes" list={results.classNames}/>;
    } else {
        classList = "";
    }

    let selectorList;
    if (results != null && "selectors" in results) {
        selectorList = <SearchResultList name="Selectors" list={results.selectors}/>;
    } else {
        selectorList = "";
    }
    return (
        <React.Fragment>
            <Row>
                <Col>{packageList}</Col>
                <Col>{classList}</Col>
                <Col>{selectorList}</Col>
            </Row>
        </React.Fragment>
    );
}

export default SearchResults;