import {useFetch} from "../utils/useFetch";
import React from "react";

const MCAuthorInfo = ({ match }) => {

    const {data, loading} = useFetch(`/mc/authors/${match.params.name}`);

    if (loading) {
        return (
            <React.Fragment>
                <h3>Author: {match.params.name}</h3>
                <p>Loading ...</p>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <h3>Author: {data.name}</h3>
            <p>{JSON.stringify(data)}</p>
        </React.Fragment>
    );
};

export default MCAuthorInfo;