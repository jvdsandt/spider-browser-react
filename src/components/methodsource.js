import React, {useEffect} from "react";
import Prism from "prismjs";
import "prismjs/components/prism-smalltalk.min";
import "prismjs/themes/prism.css";

const MethodSource = ({method}) => {

    useEffect(() => {
        const tooLongToFormat = source != null && source.length > 2500;
        if (!tooLongToFormat) {
            Prism.highlightAll();
        }
    }, [method]);

    const source = method ? method.source : "";
    return (
        <pre><code className="language-smalltalk">{source}</code></pre>
    );
}

export default MethodSource;