import React, {useState} from "react";

const SearchResultList = ({ name, list }) => {

    return (
        <React.Fragment>
            <h3>{name}</h3>
            <ul>
                {list.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </React.Fragment>
    );
};

export default SearchResultList;