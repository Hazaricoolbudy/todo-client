import React, { useState } from "react";
import { redirect } from "react-router-dom";

const Signup = () => {

    const [credential, setCredential] = useState({ name: "", email: "", password: "" })
    const onSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:8000/api/auth/createUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
            ,
            body: JSON.stringify({ name: credential.name, email: credential.email, password: credential.password })
        })
        const data = await response.json();
        console.log(data)
        if (data) {
            localStorage.setItem({ 'token': data.authTokem })
            redirect("/")
        }
        else {

        }
    }
    const onChange = (e) => {

        setCredential({ ...credential, [e.target.name]: e.target.value })
    }
    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="emailHelp"
                        name="name"
                        onChange={onChange}
                        value={credential.name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={onChange} value={credential.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} value={credential.password} />
                </div>


                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Signup;
