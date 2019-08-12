import React from "react";

class MethodSource extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const source = this.props.method ? this.props.method.source : "";
        return (
            <pre>
                {source}
            </pre>
        );
    }
}

export default MethodSource;