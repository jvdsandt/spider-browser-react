import React from "react";

const category_all = "--- all ---";

function getCategoryList(clazz, instanceSide) {
    if (!clazz) {
        return [];
    }
    var names = [];
    const methods = instanceSide ? clazz.instanceMethods : clazz.classMethods;
    methods.forEach((m) => {
        if (m.category && !names.includes(m.category)) {
            names.push(m.category);
        }
    });
    names.sort();
    names.unshift(category_all);
    return names;
}

function handleSelection(categoryName, onSelectionChange) {
    if (categoryName === category_all) {
        onSelectionChange(null);
    } else {
        onSelectionChange(categoryName);
    }
}

const MethodCategoryList = ({ clazz, instanceSide, onSelectionChange }) => {
    const list = getCategoryList(clazz, instanceSide);
    return (
        <div>
            <h2>Categories</h2>
            <ul className={"spider-list"}>
                {list.map(each => (
                    <li key={each}>
                        <button onClick={() => handleSelection(each, onSelectionChange)}>{each}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MethodCategoryList;
