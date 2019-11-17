import React, { Fragment } from 'react';
import { FaSearch } from "react-icons/fa";

const Search = ({ searchTerm, handleChange }) => {
    return (
        <Fragment>
            <input
                type="text"
                className="search__input mb-5"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
            <button className="search__button">
                <FaSearch className="search__icon" />
            </button>
        </Fragment>

    );
};

export default Search;