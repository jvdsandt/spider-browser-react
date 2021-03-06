import {useFetch} from "../utils/useFetch";
import React from "react";

const GitAuthorInfo = ({ match }) => {

    const {data, loading} = useFetch(`/git/authors/${match.params.name}`);

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

export default GitAuthorInfo;