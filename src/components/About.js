import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";

const About = () => {
    const a = useContext(noteContext)
    return <div>About
        {
            a.name
        }</div>;
};

export default About;
