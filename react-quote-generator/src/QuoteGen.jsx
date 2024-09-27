import React, { useState } from "react";

const quotes = [
  "1. We suffer more in imagination than in reality.",
  "2. A gem cannot be polished without friction nor a man perfected without trials.",
  "3. Dwell on the Beauty of life.",
  "4. Everything we hear is an opinion, not a fact.",
  "5. The soul becomes dyed with the color of its thoughts.",
];
const authors = [
  "-Seneca",
  "-Seneca",
  "-Marcus Aurelius",
  "-Marcus Aurelius",
  "-Marcus Aurelius",
];

export default function QuoteGen() {
  const [Quote, SetQuote] = useState("Welcome");
  const [Author, SetAuthor] = useState("");
  const [Count, SetCount] = useState(4);

  const Increment = () => {
    SetCount((prevCount) => {
      const newCount = prevCount === 4 ? 0 : prevCount + 1;
      SetQuote(quotes[newCount]);
      SetAuthor(authors[newCount]);
      return newCount;
    });
  };

  const Decrement = () => {
    SetCount((prevCount) => {
      const newCount = prevCount === 0 ? 4 : prevCount - 1;
      SetQuote(quotes[newCount]);
      SetAuthor(authors[newCount]);
      return newCount;
    });
  };

  const Randomized = () => {
    SetCount((prevCount) => {
      const newCount = Math.floor(Math.random() * 4);
      SetQuote(quotes[newCount]);
      SetAuthor(authors[newCount]);
      return newCount;
    });
  };

  const Reset = () => {
    SetQuote("Welcome");
    SetAuthor(" ");
  };

  return (
    <div className="container">
      <p className="counter-container">
        Quote: <br /> {Quote} <br /> {Author}
      </p>
       
      <button className="button-container-decrement" onClick={Decrement}>
        Back
      </button>
      <button className="button-container-increment" onClick={Randomized}>
        Random
      </button>
      <button className="button-container-increment" onClick={Reset}>
        Reset
      </button>
      <button className="button-container-increment" onClick={Increment}>
        Forward
      </button>
    </div>
  );
}
