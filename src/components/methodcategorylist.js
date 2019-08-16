import React from "react";
import {ListGroup} from "react-bootstrap";

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

function isActiveCategory(name, selection) {
    return selection ? name === selection : name === category_all;
}

const MethodCategoryList = ({clazz, instanceSide, selection, onSelectionChange}) => {
    const list = getCategoryList(clazz, instanceSide);
    return (
        <ListGroup variant="spider list-group-flush">
            {list.map(each => (
                <ListGroup.Item key={each} variant="spider" action active={isActiveCategory(each, selection)}
                                onClick={() => handleSelection(each, onSelectionChange)}>
                    {each}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default MethodCategoryList;
