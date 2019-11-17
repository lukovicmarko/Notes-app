import React from 'react';
// import Alert from './Alert';
import NotesForm from './NoteForm';

const Modal = (props) => {
    const { addNote } = props;
    return (
        <div className="modal fade" id="add-modal">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title w-100 text-center">Modal Heading</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div className="modal-body">
                        {
                            <NotesForm addNote={addNote} />
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Modal;