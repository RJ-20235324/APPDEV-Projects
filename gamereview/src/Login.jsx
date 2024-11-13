import React, { useState } from 'react';
import Reviews from "./Reviews";

export default function Login() {
    const accounts = [
        {
            username: "admin",
            password: "admin"
        }
    ];
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");

    const getUserName = (event) => {
        setEnteredUsername(event.target.value);
    };

    const getPassword = (event) => {
        setEnteredPassword(event.target.value);
    };

    const handleLogIn = () => {
        const user = accounts.find((account) => 
          account.username === enteredUsername && account.password === enteredPassword
        );
    
        if (user) {
          setIsLoggedIn(true);
        } else {
          alert("Invalid username or password");
        }
    };

    const renderLoginForm = () => {
        return (
            <div className='login'>
                <h1>Welcome to Wormmmy's Reviews!</h1>
                <h4>Login to Continue:</h4>
                Username: 
                <input type="text" name="username" id="username" onChange={getUserName} className='username' />
                <br />
            
                <br />
                Password:
                <input type="password" name="password" id="password" onChange={getPassword}/>
                <br />
                <br />
                <button type="button" onClick={handleLogIn}>Login</button>
            </div>
        );
    };

    const renderReview = () => <Reviews isLoggedIn={isLoggedIn} />;

    if (!isLoggedIn) {
        return renderLoginForm();
    } else {
        return renderReview();
    }
}
