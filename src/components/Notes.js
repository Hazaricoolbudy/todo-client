import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";


const Notes = () => {
    let context = useContext(NoteContext)
    const { notes, addNote } = context
    return (
        <React.Fragment>
            <AddNote />
            <div className="row ">
                {
                    notes.map((note) => {
                        return (
                            <div key={note}>
                                <NoteItem note={note} />
                            </div>
                        )
                    })
                }
            </div>
        </React.Fragment>
    );
};

export default Notes;
