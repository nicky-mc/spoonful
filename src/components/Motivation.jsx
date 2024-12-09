// src/components/Motivation.jsx
import React, { useState, useEffect } from "react";

const Motivation = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://zenquotes.io/api/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[0].q);
        setAuthor(data[0].a);
      });
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h3 className="font-bold text-lg">Today's Motivation</h3>
      <p className="italic">"{quote}"</p>
      <p className="text-right">- {author}</p>
    </div>
  );
};

export default Motivation;