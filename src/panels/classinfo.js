import {useFetch} from "../utils/useFetch";
import React from "react";

const ClassInfo = ({ match }) => {

    const {data, loading} = useFetch(`/core/class_names/${match.params.name}`);

    if (loading) {
        return (
            <React.Fragment>
                <h3>Class: {match.params.name}</h3>
                <p>Loading ...</p>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <h3>Class: {data.name}</h3>
            <p>{JSON.stringify(data)}</p>
        </React.Fragment>
    );
};

export default ClassInfo;