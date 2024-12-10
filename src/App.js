import React from "react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import Navbar from "./components/Navbar";
import UserProfile from "./components/UserProfile";
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
        {/* Public Components */}
        <Motivation />
        <BreathingExercise />
        <InfoModal />

        {/* Protected Components */}
        <SignedIn>
          <UserProfile />
          <TaskManager />
          <AddToGoogleCalendar task={task} />
          <Timer duration={1500} onComplete={() => alert("Time's up!")} />
          <Journal />
          <Stickers />
        </SignedIn>

        <SignedOut>
          <div className="text-center">
            <h2 className="text-lg font-semibold mb-4">Please Sign In to Access These Features</h2>
            <SignInButton>
              <button className="btn btn-primary">Sign In</button>
            </SignInButton>
          </div>
        </SignedOut>
      </div>
    </div>
  );
};

export default App;