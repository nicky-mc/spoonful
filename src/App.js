// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Motivation from "./components/Motivation";
import BreathingExercise from "./components/BreathingExercise";
import AddToGoogleCalendar from "./components/AddToGoogleCalendar";
import Timer from "./components/Timer";
import TaskManager from "./components/TaskManager";
import Journal from "./components/Journal";
import Stickers from "./components/Stickers";
import InfoModal from "./components/InfoModal";

const App = () => {
  const task = {
	title: "Spoon! Task Helper",
	dueDate: "2023-12-01T09:00:00",
  };

  return (
	<div className="min-h-screen bg-gray-50">
	  <Navbar />
	  <div className="p-4 space-y-8">
		<Motivation />
		<BreathingExercise />
		<TaskManager />
		<AddToGoogleCalendar task={task} />
		<Timer duration={1500} onComplete={() => alert("Time's up!")} />
		<Journal />
		<Stickers />
		<InfoModal />
	  </div>
	</div>
  );
};

export default App;