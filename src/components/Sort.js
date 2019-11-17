import React from 'react';

const Sort = ({ sortNote }) => {
    return (
        <select
            className="sort-field mb-5"
            defaultValue={'DEFAULT'}
            onChange={e => sortNote(e.target.value)}
        >
            <option value="DEFAULT" disabled>Sort by</option>
            <option value="date">By Date</option>
        </select>

    );
};

export default Sort;