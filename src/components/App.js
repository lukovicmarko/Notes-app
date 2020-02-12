import React, { Fragment, useState, useEffect } from 'react';

import Container from './Container';
import Header from './Header';
import NotesList from './NotesList';
import Modal from './Modal';
import Footer from './Footer';

import notesData from '../notes.json';

const App = () => {
    const [title] = useState('Notes app');
    const [notes, setNotes] = useState(notesData);
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);

    //search
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const results = notes.filter(note => note.title.toLowerCase().includes(searchTerm.toLowerCase()) || note.author.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(results);
    }, [searchTerm, notes]);

    //add
    const addNote = note => {
        const newNotes = [...notes, note];
        setNotes(newNotes);
    }

    //delete
    const deleteNote = index => {
        const newNotes = [...notes];
        newNotes.splice(index, 1);
        setNotes(newNotes);
    }

    //sort
    const sortNote = () => {
        const newNotes = [...notes];
        const sortedNotes = newNotes.sort((a, b) => new Date(b.date) - new Date(a.date));
        setNotes(sortedNotes);
    }

    return (
        <Fragment>
            <Header title={title} />
            <div className="container mt-5">
                <Container
                    handleChange={handleChange}
                    searchTerm={searchTerm}
                    sortNote={sortNote}
                />
                <NotesList
                    notes={searchResults}
                    deleteNote={deleteNote}
                />
                <Footer />
                <Modal addNote={addNote} />
            </div>
        </Fragment>
    );
};

export default App;


