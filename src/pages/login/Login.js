import React from "react";
import { useHistory } from "react-router-dom";

function LoginPage({toggleAuth}) {
    const history = useHistory();

    function handleClick() {
        toggleAuth(true)
        history.push("/");
    }

    return (
        <>
            <h1>Login pagina</h1>
            <h2>Nothing to see here people.</h2>
            <h2>Press the button below to log in and move along.</h2>

            <button
                type="button"
                onClick={handleClick}>
                Inloggen
            </button>
        </>
    )
}

export default LoginPage