import React from "react";

class ClassList extends React.Component {
    constructor(props) {
        super(props);
        this.selectClass = this.selectClass.bind(this);
    }

    selectClass(clazz) {
        this.props.onSelectionChange(clazz);
    }

    render() {
        const classList = this.props.package ? this.props.package.classes : [];
        return (
            <div>
                <h2>Classes</h2>
                <ul className={"spider-list"}>
                    {classList.map(each => (
                        <li key={each.id}>
                            <button onClick={e => this.selectClass(each)}>
                                {each.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ClassList;
