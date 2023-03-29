import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = () => {
    const context = useContext(NoteContext)
    const [note, setNote] = useState({ title: "", description: "", tag: "default" })
    const { addNote } = context
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag)
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <h2>Add your notes</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        aria-describedby="emailHelp"
                        onChange={onChange}

                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Enter your notes</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tag">Enter your notes</label>
                    <input
                        type="text"
                        className="form-control"
                        id="tag"
                        name="tag"
                        onChange={onChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleClick}>
                    Add Note
                </button>
            </form>
        </div>
    );
};

export default AddNote;
