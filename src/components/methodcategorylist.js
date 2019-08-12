import React from "react";

const category_all = "--- all ---";

class MethodCategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.selectCategory = this.selectCategory.bind(this);
    }

    selectCategory(name) {
        this.props.onSelectionChange(name === category_all ? null : name);
    }

    render() {
        const list = this.getCategoryList();
        return (
            <div>
                <h2>Categories</h2>
                <ul className={"spider-list"}>
                    {list.map(each => (
                        <li key={each}>
                            <button onClick={e => this.selectCategory(each)}>
                                {each}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    getCategoryList() {
        if (!this.props.clazz) {
            return [];
        }
        var names = [ category_all ];
        this.props.clazz.instanceMethods.forEach(function(m) {
            if (m.category && !names.includes(m.category)) {
                names.push(m.category);
            }
        });
        names.sort();
        return names;
    }
}

export default MethodCategoryList;
