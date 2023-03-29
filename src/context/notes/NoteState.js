import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const hostUrl = "http://localhost:8000";
    let intialNote = [];
    const [notes, setNotes] = useState(intialNote);

    // fetch all notes
    const fetchAllNotes = async () => {
        const response = await fetch(`${hostUrl}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxYWRjZjk0ZWJlYTQ4YWRlZWEzNWIyIn0sImlhdCI6MTY3OTQ4NTM1Mn0.ig22dn5w8LcAH5rFJuLpKSciFYeeO8mJi3n1tJIN7NQ",
            },
        });
        intialNote = await response.json();

        setNotes(intialNote);
    };

    // Add notes

    const addNote = async (title, description, tag) => {
        // add notes api call
        const response = await fetch(`${hostUrl}/api/notes/addnotes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                " auth- token":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxYWRjZjk0ZWJlYTQ4YWRlZWEzNWIyIn0sImlhdCI6MTY3OTQ4NTM1Mn0.ig22dn5w8LcAH5rFJuLpKSciFYeeO8mJi3n1tJIN7NQ",
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = await response.json();
        console.log(json);
        console.log("adding a new note");
        let note = {
            _id: "",
            user: "641adcf94ebea48adeea35b2",
            title: title,
            description: description,
            tag: tag,
            data: "1679982562259",
            __v: 0,
        };
        setNotes(notes.concat(note));
    };
    //Delete notes
    const DeleteNote = async (id) => {
        const response = await fetch(`${hostUrl}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                " auth- token":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxYWRjZjk0ZWJlYTQ4YWRlZWEzNWIyIn0sImlhdCI6MTY3OTQ4NTM1Mn0.ig22dn5w8LcAH5rFJuLpKSciFYeeO8mJi3n1tJIN7NQ",
            },
        });
        console.log(`${hostUrl}/api/notes/deletenote/${id}`)
        const json = await response.json();
        console.log(json)

        const newNotes = notes.filter((note) => {
            return note._id !== id;
        });
        setNotes(newNotes);
    };

    //Edit notes
    const editNote = async (id, title, description, tag) => {
        //Api call for edit

        const response = await fetch(`${hostUrl}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                " auth- token":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxYWRjZjk0ZWJlYTQ4YWRlZWEzNWIyIn0sImlhdCI6MTY3OTQ4NTM1Mn0.ig22dn5w8LcAH5rFJuLpKSciFYeeO8mJi3n1tJIN7NQ",
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = response.json();
        let newNotes = JSON.parse(JSON.stringify(notes));
        console.log(json);

        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    };
    return (
        <NoteContext.Provider
            value={{ notes, addNote, DeleteNote, editNote, fetchAllNotes }}
        >
            {props.children}
        </NoteContext.Provider>
    );
};
export default NoteState;
