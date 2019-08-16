import React from "react";
import {ListGroup} from "react-bootstrap";

const ClassList = ({pack, onSelectionChange}) => {
    const classList = pack ? pack.classes : [];
    return (
        <ListGroup variant="spider list-group-flush">
            {classList.map(each => (
                <ListGroup.Item key={each.id} variant="spider" action onClick={() => onSelectionChange(each)}>
                    {each.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default ClassList;
