import React from "react";

const PackageList = ({packages, onSelectionChange}) => {
    return (
        <div>
            <h2>Packages</h2>
            <ul className={"spider-list"}>
                {packages.map(each => (
                    <li key={each.id}>
                        <button onClick={() => onSelectionChange(each)}>
                            {each.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PackageList;
