import React, { useState } from 'react';
import { IoIosClose, IoIosContact } from "react-icons/io";
import { FaStar, FaRegStar } from "react-icons/fa";

const Note = props => {
    const { author, title, body, status, date } = props.note;
    const { deleteNote, index } = props;
    const [checked, setChecked] = useState(status)

    // save/delete to/from localstorage
    const toggleSave = () => {
        setChecked(!checked)
        if (!checked) {
            //save
            localStorage.setItem(index, JSON.stringify(props.note));
        } else {
            //delete
            localStorage.removeItem(index);
        }
    }

    return (
        <div className="col-md-4">
            <div className="note mb-5">
                <div className="d-flex flex-row-reverse">
                    <IoIosClose
                        onClick={() => {
                            const confirm = window.confirm('Are u sure you want to delete note?')
                            if (confirm) {
                                deleteNote(index);
                            } else {
                                return false;
                            }
                        }}
                        className="note__delete mt-3"
                        size="25"
                    />
                </div>
                <div className="text-center note__author">
                    <IoIosContact size="70" className="note__profile mt-3" />
                    <h4 className="m-4 text-capitalize note__name">{author}</h4>
                </div>

                <p>{date}</p>
                <h5 className="note__title text-capitalize mb-3">{title}</h5>

                <div className="font-weight-bold mt-4 mb-4 note__status">
                    <span>
                        Status: &nbsp;
                        <span className={checked ? "text-success" : "text-danger"}>
                            {checked ? "Saved" : "Unsaved"}
                        </span>
                    </span>
                    <span
                        className="note__star-outer"
                        onClick={toggleSave}
                    >
                        {checked ? <FaStar /> : <FaRegStar />}
                    </span>

                </div>
                <p className="text-capitalize">{body}</p>
            </div>
        </div>
    );
};

export default Note;