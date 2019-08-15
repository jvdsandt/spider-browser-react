import React from "react";

function getMethodList(clazz, instanceSide, category) {
    if (!clazz) {
        return [];
    }
    var list = instanceSide ? clazz.instanceMethods : clazz.classMethods;
    if (category) {
        list = list.filter(m => category === m.category);
    }
    return list;
}

const MethodList = ({clazz, instanceSide, category, onSelectionChange}) => {
    const methodList = getMethodList(clazz, instanceSide, category);
    return (
        <div>
            <h2>Methods</h2>
            <ul className={"spider-list"}>
                {methodList.map(each => (
                    <li key={each.id}>
                        <button onClick={() => onSelectionChange(each)}>
                            {each.selector}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MethodList;
