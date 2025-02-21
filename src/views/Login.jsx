import React, { useState } from "react";

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        const user = await fetch(`http://localhost:8000/api/auth/login?email=${username}&password=${password}`, {
                method: 'POST',
            })
            .then(response => response.json())
            .then(data => {
                return data;
            })

        if(user.error){
            setHasError(true);
            setError(user.error)
        }else{
            localStorage.setItem('token', user.access_token);
            window.location.reload();
        }
        
    }

    return(
        <div className="container">
            <div className="login">
                <a className="navbar-brand loginlogo" href="#" style={{ marginBottom: "30px", display: "block" }}><div className="icon">L</div>Library of Readed Books</a>
                <form method="POST" className="loginform" onSubmit={(event) => login(event)}>
                <div className="form-group" style={{ marginBottom: "20px" }}>
                    <label className="form-check-label" htmlFor="username">E-mailadres</label>    
                    <input type="text" onChange={(event) => setUsername(event.target.value)} className="form-control" name="username" id="username" aria-describedby="emailHelp" />
                </div>
                <div className="form-group" style={{ marginBottom: "20px" }}>
                <label className="form-check-label" htmlFor="password">Wachtwoord</label>    
                    <input type="password" onChange={(event) => setPassword(event.target.value)} className="form-control" name="password" id="password" />
                </div>
                <button type="submit" name="submitlogin" id="submitlogin"  className="btn btn-green">Inloggen</button>
                </form>
            </div>
        </div>
    )
}

export default Login;