// src/components/Motivation.jsx
import React, { useEffect, useState } from "react";

const Motivation = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/random"));
        const data = await response.json();
        const parsedData = JSON.parse(data.contents);
        setQuote(parsedData[0].q);
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h3 className="font-bold text-lg mb-2">Motivation</h3>
      <p>{quote}</p>
    </div>
  );
};

export default Motivation;