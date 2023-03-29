import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";


const Notes = () => {
    let context = useContext(NoteContext)
    const { notes, fetchAllNotes } = context
    useEffect(() => {
        fetchAllNotes()
    }, [])
    return (
        <React.Fragment>
            <AddNote />
            <div className="row my-3 ">
                {
                    notes.map((note) => {
                        return <NoteItem note={note} key={note._id} />
                    })
                }
            </div>
        </React.Fragment>
    );
};

export default Notes;
