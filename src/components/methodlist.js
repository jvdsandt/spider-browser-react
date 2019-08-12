import React from "react";

class MethodList extends React.Component {
    constructor(props) {
        super(props);
        this.selectMethod = this.selectMethod.bind(this);
    }

    selectMethod(method) {
        this.props.onSelectionChange(method);
    }

    render() {
        const methodList = this.getMethodList();
        return (
            <div>
                <h2>Methods</h2>
                <ul className={"spider-list"}>
                    {methodList.map(each => (
                        <li key={each.id}>
                            <button onClick={e => this.selectMethod(each)}>
                                {each.selector}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    getMethodList() {
        if (!this.props.clazz) {
            return [];
        }
        var list = this.props.clazz.instanceMethods;
        if (this.props.category) {
            list = list.filter((m) => this.props.category === m.category);
        }
        return list;
    }
}

export default MethodList;
