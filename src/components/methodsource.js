import React, {useEffect} from "react";
import Prism from "prismjs";
import "./prism.css";

const MethodSource = ({method}) => {

    useEffect(() => {
        Prism.highlightAll();
    }, [ method ]);

    const source = method ? method.source : "";
    return (
        <pre><code className="language-smalltalk">{source}</code></pre>
    );
}

export default MethodSource;