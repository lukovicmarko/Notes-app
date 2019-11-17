import React from 'react';
import AddBtn from './AddBtn';
import Search from './Search';
import Sort from './Sort';

const Container = ({ handleChange, searchTerm, sortNote }) => {
    return (
        <div className="row">
            <div className="col-md-4">
                <Sort sortNote={sortNote} />
            </div>
            <div className="col-md-4">
                <Search handleChange={handleChange} searchTerm={searchTerm} />
            </div>
            <div className="col-md-4 text-center pt-2">
                <AddBtn />
            </div>
        </div>
    );
};

export default Container;