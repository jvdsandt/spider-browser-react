import React from "react";

const MethodSource = ({method}) => {

    const source = method ? method.source : "";
    return (
        <pre>{source}</pre>
    );
}

export default MethodSource;