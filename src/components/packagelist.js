import React, { useState, useEffect } from "react";
import {ListGroup} from "react-bootstrap";

function isSamePackage(p, selectedPackage) {
    if (!selectedPackage) {
        return false;
    }
    return p.id === selectedPackage.id;
}

const PackageList = ({packages, selection, onSelectionChange}) => {

    const [selected, setSelected] = useState(selection);

    const onClickSelector = (each) => {
        setSelected(each);
        onSelectionChange(each)
    }

    return (
        <ListGroup variant="spider list-group-flush">
            {packages.map(each => (
                <ListGroup.Item key={each.id} variant="spider" action active={isSamePackage(each, selected)} onClick={() => onClickSelector(each)}>
                    {each.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default PackageList;
