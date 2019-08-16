import React from "react";
import {ListGroup} from "react-bootstrap";

function isSamePackage(p, selectedPackage) {
    if (!selectedPackage) {
        return false;
    }
    return p.id === selectedPackage.id;
}

const PackageList = ({packages, selection, onSelectionChange}) => {
    return (
        <ListGroup variant="spider list-group-flush">
            {packages.map(each => (
                <ListGroup.Item key={each.id} variant="spider" action active={isSamePackage(each, selection)} onClick={() => onSelectionChange(each)}>
                    {each.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default PackageList;
