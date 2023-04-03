import NoteContext from "./NoteContext";
// import { useState } from "react";

// const NoteState = (props) => {
//     const hostUrl = "http://localhost:8000";
//     let intialNote = [];
//     const [notes, setNotes] = useState(intialNote);

//     // fetch all notes
//     const fetchAllNotes = async () => {
//         const response = await fetch(`${hostUrl}/api/notes/fetchallnotes`, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 "auth-token":
//                     localStorage.getItem('token'),
//             },
//         });
//         intialNote = await response.json();

//         setNotes(intialNote);
//     };

//     // Add notes

//     const addNote = async (title, description, tag) => {
//         // add notes api call
//         const response = await fetch(`${hostUrl}/api/notes/addnotes`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 " auth- token": localStorage.getItem('token')
//                 ,
//             },
//             body: JSON.stringify({ title, description, tag }),
//         });
//         const json = await response.json();
//         console.log(json);
//         console.log("adding a new note");

//         setNotes(notes.concat(notes.concat(json)));
//     };
//     //Delete notes
//     const DeleteNote = async (id) => {
//         const response = await fetch(`${hostUrl}/api/notes/deletenote/${id}`, {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json",
//                 " auth- token":
//                     localStorage.getItem('token'),
//             },
//         });

//         const json = await response.json();


//         const newNotes = notes.filter((note) => {
//             return note._id !== id;
//         });
//         setNotes(newNotes);
//     };

//     //Edit notes
//     const editNote = async (id, title, description, tag) => {
//         //Api call for edit

//         const response = await fetch(`${hostUrl}/api/notes/updatenote/${id}`, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//                 " auth- token":
//                     localStorage.getItem('token'),
//             },
//             body: JSON.stringify({ title, description, tag }),
//         });
//         const json = response.json();
//         let newNotes = JSON.parse(JSON.stringify(notes));
//         console.log(json);

//         for (let index = 0; index < notes.length; index++) {
//             const element = notes[index];
//             if (element._id === id) {
//                 element.title = title;
//                 element.description = description;
//                 element.tag = tag;
//                 break;
//             }
//         }
//         setNotes(newNotes);
//     };
//     return (
//         <NoteContext.Provider
//             value={{ notes, addNote, DeleteNote, editNote, fetchAllNotes }}
//         >
//             {props.children}
//         </NoteContext.Provider>
//     );
// };
// export default NoteState;


import { useState } from "react";

const NoteState = (props) => {
    const hostUrl = "http://localhost:8000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    // Get all Notes
    const fetchAllNotes = async () => {
        // API Call 
        const response = await fetch(`${hostUrl}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': localStorage.getItem('token')
            }
        });
        const json = await response.json()
        setNotes(json)
    }

    // Add a Note
    const addNote = async (title, description, tag) => {
        // TODO: API Call
        // API Call 
        const response = await fetch(`${hostUrl}/api/notes/addnotes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });

        const note = await response.json();
        setNotes(notes.concat(note))
    }

    // Delete a Note
    const DeleteNote = async (id) => {
        // API Call
        const response = await fetch(`${hostUrl}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = response.json();
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        // API Call 
        const response = await fetch(`${hostUrl}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();

        let newNotes = JSON.parse(JSON.stringify(notes))
        // Logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, DeleteNote, editNote, fetchAllNotes }}>
            {props.children}
        </NoteContext.Provider>
    )

}
export default NoteState;