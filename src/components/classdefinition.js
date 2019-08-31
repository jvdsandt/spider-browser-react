import React, {useEffect} from "react";
import Prism from "prismjs";
import "prismjs/components/prism-smalltalk.min";
import "prismjs/themes/prism.css";

const ClassDefinition = ({clazz, instanceSide}) => {

    useEffect(() => {
        Prism.highlightAll();
    }, [clazz, instanceSide]);

    const source = clazz === null ?
        '' :
        (instanceSide ? clazz.definition : clazz.classDefinition);
    return (
        <pre><code className="language-smalltalk">{source}</code></pre>
    );
}

export default ClassDefinition;