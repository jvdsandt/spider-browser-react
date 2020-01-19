import React from "react";
import {useFetch} from "../utils/useFetch";

const PackageInfo = ({ match }) => {

    const {data, loading} = useFetch(`/core/package_names/${match.params.name}`);

    if (loading) {
        return (
            <React.Fragment>
                <h3>Package: {match.params.name}</h3>
                <p>Loading ...</p>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <h3>Package: {data.name}</h3>
            <p>{JSON.stringify(data)}</p>
        </React.Fragment>
    );
};

export default PackageInfo;