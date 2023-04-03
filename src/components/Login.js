import React, { useState } from "react";


const Login = () => {

    const [credential, setCredential] = useState({ email: "", passowrd: "" })


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify({ email: credential.email, password: credential.passowrd })
        })
        const data = await response.json()
        console.log(data)
        if (data) {
            localStorage.setItem({ "token": data.authtoken })

        }
        else {
            window.location("/login")
        }
    }
    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" vlaue={credential.email} onChange={onChange} />

                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={credential.passowrd} onChange={onChange} />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </React.Fragment>
    );
};

export default Login;
