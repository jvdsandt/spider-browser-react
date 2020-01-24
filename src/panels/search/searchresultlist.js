import React from "react";
import {Link} from "react-router-dom";

const SearchResultList = ({ name, path, list }) => {

    return (
        <React.Fragment>
            <h3>{name}</h3>
            <ul>
                {list.map(item => (
                    <li key={item}><Link to={path + "/" + item }>{item}</Link></li>
                ))}
            </ul>
        </React.Fragment>
    );
};

export default SearchResultList;