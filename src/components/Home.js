import React from "react";

import Notes from "./Notes";

const Home = () => {

    return (
        <React.Fragment>

            <div className="my-3 container">
                <h2>Your notes</h2>
                <Notes />

            </div>
        </React.Fragment>
    );
};

export default Home;
