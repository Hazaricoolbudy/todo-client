import React from "react";

const Alert = (props) => {
    return (
        <div className="alert alert-success" role="alert">
            {props.massage}
        </div>
    );
};

export default Alert;
