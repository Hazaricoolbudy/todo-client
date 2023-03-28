import React from "react";


const NoteItem = ({ note }) => {

    return (
        <div className="col-md-3">
            <div className="card my-2" style={{ 'width': '18rem' }}>

                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-pen-to-square mx-3"></i>
                    <i className="fa-sharp fa-solid fa-trash"></i>
                </div>
            </div>
        </div>
    );
};

export default NoteItem;