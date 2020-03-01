import {useFetch} from "../utils/useFetch";
import React from "react";

const SelectorInfo = ({ match }) => {

    const {data, loading} = useFetch(`/core/selectors/${match.params.name}`);

    if (loading) {
        return (
            <React.Fragment>
                <h3>Selector: {match.params.name}</h3>
                <p>Loading ...</p>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <h3>Selector: {data.name}</h3>
            <p>{JSON.stringify(data)}</p>
        </React.Fragment>
    );
};

export default SelectorInfo;