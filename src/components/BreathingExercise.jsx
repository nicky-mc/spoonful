// src/components/BreathingExercise.jsx
import React, { useState } from "react";

const BreathingExercise = () => {
  const [progress, setProgress] = useState(0);

  const startExercise = () => {
    const totalSteps = 10;
    let currentStep = 0;

    const interval = setInterval(() => {
      if (currentStep === totalSteps) {
        clearInterval(interval);
        alert("Well done! You've completed your breathing exercise.");
      } else {
        setProgress(((currentStep + 1) / totalSteps) * 100);
        currentStep += 1;
      }
    }, 1000);
  };

  return (
    <div className="p-4 bg-blue-100 rounded shadow-md">
      <h3 className="font-bold text-lg">Take a Breathing Break</h3>
      <div className="w-full bg-gray-200 rounded-full h-4 my-4">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <button onClick={startExercise} className="btn btn-primary">
        Start Breathing Exercise
      </button>
    </div>
  );
};

export default BreathingExercise;