import React from "react";

const ClassList = ({ pack, onSelectionChange }) => {
    const classList = pack ? pack.classes : [];
    return (
        <div>
            <h2>Classes</h2>
            <ul className={"spider-list"}>
                {classList.map(each => (
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

export default ClassList;
