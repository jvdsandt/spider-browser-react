import React from "react";
import {ListGroup} from "react-bootstrap";

function isActiveClass(c, selection) {
    return selection ? c.id === selection.id : false;
}

const ClassList = ({pack, selection, onSelectionChange}) => {
    const classList = pack ? pack.classes : [];
    return (
        <ListGroup variant="spider list-group-flush">
            {classList.map(each => (
                <ListGroup.Item key={each.id} variant="spider" action active={isActiveClass(each, selection)}
                                onClick={() => onSelectionChange(each)}>
                    {each.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default ClassList;
