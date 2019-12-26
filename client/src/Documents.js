import React, { useState, useEffect } from "react";
import AuthService from './AuthService';
import { useHistory } from "react-router-dom";

export default function Documents() {

    const [message, setMessage] = useState("");
    let history = useHistory();

    useEffect(() => {
        if (!AuthService.checkJWT()) {
            history.push('/');
        }
        getDocs()
    }, [history]);

    const getDocs = () => {
        AuthService.fetchDocs()
            .then((res) => {
                setMessage(res.data.message)
            });
    }

    const logOut = () => {
        AuthService.logOut();
        history.push('/');
    }

    return (
        <div className="row" style={{ margin: "30px" }}>

            <div className="mb-2">
                <button onClick={() => logOut()} className="btn btn-primary">Logout</button>
            </div>

            <div className="card p-5">
                <h1>{message}</h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Nulla finibus ex ipsum, vitae molestie ex luctus vel. Aliquam a metus libero.
                  Aenean cursus massa sit amet erat lacinia, non feugiat metus facilisis. Donec varius auctor lectus id venenatis. Morbi auctor eu ipsum nec ornare. Aenean et ex placerat nibh dignissim dapibus nec at justo. Donec quis odio nisi. In est ligula, venenatis vel justo vitae, ultrices faucibus urna.
                Aliquam elementum enim dictum commodo lobortis. Aenean vestibulum vel nisi et convallis.
            </div>
        </div>
    )
}
