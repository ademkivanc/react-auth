import React, { useState, useEffect } from "react";
import AuthService from './AuthService';
import { useHistory } from "react-router-dom";

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    let history = useHistory();

    useEffect(() => {
        localStorage.clear();
    }, []);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const credentials = { username: username, password: password };
        AuthService.login(credentials).then(res => {
            if (res.status === 200) {
                localStorage.setItem(AuthService.getLsKey(), JSON.stringify(res.data));
                history.push('/documents');
            } else {
                setMessage(res.data.message)
            }
        })
        .catch(error => {
            setMessage(error.response.data.message)
        });
    };

    return (
        <div className="col-8" style={{ margin: "30px auto" }}>
            {message && (<div className="alert alert-danger" role="alert">
                {message}
            </div>)}
            <div className="card">
                <div className="card-body">
                    <div className="row justify-content-center">
                        <form onSubmit={handleSubmit}>
                            <h3>Log In</h3>

                            <div className="form-group">
                                <label>User name</label>
                                <input value={username} onChange={e => setUsername(e.target.value)} type="username" className="form-control" placeholder="User name" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
