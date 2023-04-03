import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";


const NoteItem = (props) => {
    const context = useContext(NoteContext)
    const { DeleteNote } = context
    const { note, updateNote } = props

    return (
        <div className="col-md-3 mx-3">
            <div className="card my-2 " style={{ 'width': '18rem' }}>

                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-pen-to-square mx-3" onClick={() => updateNote(note)}></i>
                    <i className="fa-sharp fa-solid fa-trash" onClick={() => DeleteNote(note._id)}></i>
                </div>
            </div>
        </div>
    );
};

export default NoteItem;
