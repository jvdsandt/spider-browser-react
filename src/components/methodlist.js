import React from "react";
import {ListGroup} from "react-bootstrap";

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

function isActiveMethod(m, selection) {
    return selection ? m.id === selection.id : false;
}

const MethodList = ({clazz, instanceSide, category, selection, onSelectionChange}) => {
    const methodList = getMethodList(clazz, instanceSide, category);
    return (
        <ListGroup variant="spider list-group-flush">
            {methodList.map(each => (
                <ListGroup.Item key={each.id} action active={isActiveMethod(each, selection)} variant="spider"
                                onClick={() => onSelectionChange(each)}>
                    {each.selector}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default MethodList;
