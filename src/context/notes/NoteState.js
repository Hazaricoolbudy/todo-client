import NoteContext from "./NoteContext";
import { useState } from "react";


const NoteState = (props) => {
    const hostUrl = 'http://localhost:8000'

    let intialNote = []
    // fetch all notes 
    const fetchAllNotes = async () => {
        const response = await fetch(`${hostUrl}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': ""
            }
        })
        intialNote = await response.json()
        return intialNote
    }
    fetchAllNotes()
    const [notes, setNotes] = useState(intialNote)
    // Add notes

    const addNote = async (title, description, tag) => {
        // add notes api call
        const response = await fetch(`${hostUrl}/api/notes/addnotes`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                " auth- token": ""
            },
            body: JSON.stringify({ title, description, tag })
        })
        const json = response.json();
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
        setNotes(notes.concat(note))
    }
    //Delete notes
    const DeleteNote = (id) => {
        console.log(`deleteing a notes with id ${id}`)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    //Edit notes
    const editNote = async (id, title, description, tag) => {
        //Api call for edit 

        const response = await fetch(`${hostUrl}/api/notes/updatenote/${id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                " auth- token": ""
            },
            body: JSON.stringify({ title, description, tag })
        })
        const json = response.json()

        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag
            }

        }
    }
    return (
        <NoteContext.Provider value={{ notes, addNote, DeleteNote, editNote, fetchAllNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState