import React from "react";
import { formatTimestamp, formatSha } from "../utils/format";

const CodeFooter = ({selectedPackage, selectedClass, selectedMethod}) => {
    var gitCommit = null;
    var entity = "";
    if (selectedMethod != null) {
        gitCommit = selectedMethod.gitCommit;
        entity = "Method";
    } else if (selectedClass != null) {
        gitCommit = selectedClass.gitCommit;
        entity = "Class";
    } else if (selectedPackage != null) {
        gitCommit = selectedPackage.gitCommit;
        entity = "Package";
    }
    if (gitCommit == null) {
        return "";
    }
    return (
        <div>
            {entity} edtion: {formatSha(gitCommit.sha)} {gitCommit.authorName} {formatTimestamp(gitCommit.datetime)} - {gitCommit.messageLine}
        </div>
    );
}

export default CodeFooter;
