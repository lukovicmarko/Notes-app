import React from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";

const AddBtn = () => {
    return (
        <span
            className="add-note"
            data-toggle="modal"
            data-target="#add-modal"
        >
            <IoIosAddCircleOutline
                className="mr-2"
                size={30}
            />Add new note
         </span>
    );
};

export default AddBtn;