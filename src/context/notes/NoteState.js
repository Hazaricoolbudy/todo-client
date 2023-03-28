import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {

    const intialNote = [
        {
            "_id": "64227fdef4942ce3cc1c1428",
            "user": "641adcf94ebea48adeea35b2",
            "title": "this is first notes",
            "description": "i want to be a full stack developer",
            "tag": "aim",
            "data": "1679982558876",
            "__v": 0
        },
        {
            "_id": "64227fe0f4942ce3cc1c142a",
            "user": "641adcf94ebea48adeea35b2",
            "title": "this is first notes",
            "description": "i want to be a full stack developer",
            "tag": "aim",
            "data": "1679982560534",
            "__v": 0
        },
        {
            "_id": "64227fe1f4942ce3cc1c142c",
            "user": "641adcf94ebea48adeea35b2",
            "title": "this is first notes",
            "description": "i want to be a full stack developer",
            "tag": "aim",
            "data": "1679982561419",
            "__v": 0
        },
        {
            "_id": "64227fe1f4942ce3cc1c142e",
            "user": "641adcf94ebea48adeea35b2",
            "title": "this is first notes",
            "description": "i want to be a full stack developer",
            "tag": "aim",
            "data": "1679982561883",
            "__v": 0
        },

    ]
    const [notes, setNotes] = useState(intialNote)
    // Add notes
    const addNote = (title, description, tag) => {
        console.log("adding a new note")
        let note = {
            "_id": Math.random(),
            "user": "641adcf94ebea48adeea35b2",
            "title": title,
            "description": description,
            "tag": tag,
            "data": "1679982562259",
            "__v": 0
        };
        setNotes(notes.concat(note.title, note.description, note.tag))
    }
    //Delete notes
    const DeleteNote = () => {

    }

    //Edit notes
    const editNote = () => {

    }
    return (
        <NoteContext.Provider value={{ notes, addNote, DeleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState