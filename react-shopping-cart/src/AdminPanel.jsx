import React, { useState } from "react";
import Login from "./Login";

export default function AdminPanel(props) {
  const accounts = props.accounts || []; // Ensure accounts is an array
  const [devlogs, setDevlogs] = useState([]);

  function AddDevlogs() {
    const devlog = {
      date:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1).toString().padStart(2, "0") + // Correctly get month
        "-" +
        new Date().getDate().toString().padStart(2, "0"), // Ensure date is two digits
      title: document.getElementById("title").value, // Use value instead of ariaValueMax
      content: document.getElementById("content").value,
    };

    setDevlogs((d) => [...d, devlog]);
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
  }

  const renderAccounts = () => {
    return accounts.map((account) => (
      <div key={account.id}> {/* Move key here */}
        <h2>{account.username}</h2>
        <p>{account.role}</p>
      </div>
    ));
  };

  const renderDevlogHistory = () => {
    return devlogs.map((devlog, index) => (
      <div key={index}>
        <h2>{devlog.title}</h2>
        <h3>{devlog.date}</h3>
        <p>{devlog.content}</p>
      </div>
    ));
  };

  if (!props.isLoggedIn) {
    return <Login />;
  } else {
    return (
      <div>
        <h1>This is the Admin Panel</h1>
        <p>These are the Active accounts:</p>
        <div>{renderAccounts()}</div>
        <hr />
        <h4>Admin Devlog</h4>
        Title: <input type="text" name="title" id="title" />
        <br />
        <hr />
        Content:
        <br />
        <textarea name="content" id="content" cols="50" rows="10"></textarea>
        <br />
        <button type="submit" onClick={AddDevlogs}>
          Submit
        </button>
        <h4>Devlog History:</h4>
        {renderDevlogHistory()}
      </div>
    );
  }
}
