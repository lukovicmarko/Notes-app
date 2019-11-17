import React from 'react';
import Note from './Note';

import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

const NotesList = ({ notes, deleteNote }) => {
    return (
        <div className="mt-5">
            {
                (notes.length === 0)
                    ?
                    (<div className="text-center">No notes to show...</div>)
                    :
                    (
                        <TransitionGroup component="div" className="row">
                            {
                                notes.map((note, index) => (
                                    <CSSTransition
                                        key={index}
                                        timeout={{ enter: 500, exit: 500 }}
                                        classNames="note"
                                    >
                                        <Note
                                            key={index}
                                            note={note}
                                            deleteNote={deleteNote}
                                            index={index} />
                                    </CSSTransition>
                                ))
                            }
                        </TransitionGroup>
                    )
            }
        </div>
    );
};

export default NotesList;