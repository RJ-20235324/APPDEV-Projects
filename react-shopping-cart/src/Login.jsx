import { useState } from "react";
import Shop from "./shop";
import AdminPAnel from "./AdminPanel";

export default function Login() {
  const items = [
    { id: 1, name: "grape", price: 50 },
    { id: 2, name: "orange", price: 30 },
    { id: 3, name: "pickles", price: 40 },
  ];

  const accounts = [
    { id: 1, username: "customer", password: "1234", role: "customer" },
    { id: 2, username: "admin", password: "2214", role: "admin" },
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const [enteredUsernames, setEnteredUsernames] = useState("");
  const [enteredPin, setEnteredPin] = useState("");

  const getUserNames = (event) => {
    setEnteredUsernames(event.target.value);
  };

  const getPin = (event) => {
    setEnteredPin(event.target.value);
  };

  const handleLogIn = () => {
    const user = accounts.find((account) => 
      account.username === enteredUsernames && account.password === enteredPin
    );

    if (user) {
      setIsLoggedIn(true);
      setRole(user.role);
    } else {
      alert("Invalid username or password");
    }
  };

  const renderLogin = () => (
    <div>
      <h1>Login:</h1>
      Username:{" "}
      <input
        type="text"
        placeholder="username"
        id="username"
        onChange={getUserNames}
      />
      <br />
      Pin:{" "}
      <input
        type="password"
        placeholder="password"
        id="password"
        onChange={getPin}
      />
      <br />
      <button onClick={handleLogIn}>Login</button>
    </div>
  );

  const renderShop = () => <Shop isLoggedIn={isLoggedIn} items={items} />;

  const renderAdmin = () => <AdminPAnel isLoggedIn={isLoggedIn} items={items} />

  if (!isLoggedIn) {
    return renderLogin();
  } else {
    return role === "admin" ? renderAdmin() : renderShop();
  }
}
