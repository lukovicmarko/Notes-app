import React, { useState, useRef } from 'react';
import Alert from './Alert';
import moment from 'moment';

const NoteForm = ({ addNote }) => {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [message, setMessage] = useState('');
    const [className, setClassName] = useState('');

    // Use a ref to access the current count value in
    // an async callback.
    const messageRef = useRef(message);
    messageRef.current = message;

    const classNameRef = useRef(className);
    classNameRef.current = className;

    //Remove warning message and class after 3 sec
    const getCountTimeout = () => {
        setTimeout(() => {
            setMessage('');
            setClassName('');
        }, 3000)
    }

    const onFormSubmit = e => {
        e.preventDefault();
        //time
        const date = moment().format("D MMM YYYY");
        //Validation
        if (!author || !title || !body) {
            setMessage('Please fill all the fields!');
            setClassName('alert alert-danger text-center');
            getCountTimeout();
        } else {
            const note = {
                author,
                title,
                body,
                date,
                status: false
            };

            //Clear fields
            setAuthor('');
            setTitle('');
            setBody('');

            //add note to array
            addNote(note);

            //uppercase author first letter
            const uppercaseFirstLetter = author.charAt(0).toUpperCase() + author.slice(1);
            setMessage(`Notes added by ${uppercaseFirstLetter}`);
            setClassName('alert alert-success text-center');
            getCountTimeout();
        }

    }
    return (
        <form onSubmit={onFormSubmit}>
            <div className="form-group">
                <label htmlFor="author">Author:</label>
                <input
                    type="text"
                    className="form-control text-capitalize"
                    id="author"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    className="form-control text-capitalize"
                    id="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="body">Body:</label>
                <textarea
                    className="form-control text-capitalize"
                    id="body" rows="3"
                    value={body}
                    onChange={e => setBody(e.target.value)}
                ></textarea>
            </div>
            <div className="text-center">
                <button type="submit" className="form__add-note">Add note</button>
            </div>

            <div className="row">
                <div className="mx-auto">
                    <Alert message={message} className={className} />
                </div>
            </div>
        </form>
    );
};

export default NoteForm;