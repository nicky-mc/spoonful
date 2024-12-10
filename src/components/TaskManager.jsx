// src/components/TaskManager.jsx
import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { useUser } from "@clerk/clerk-react";

const TaskManager = () => {
  const { user } = useUser();
  const [tasks, setTasks] = useState([]);
  const [tier, setTier] = useState("tier_1");
  const [spoons, setSpoons] = useState(10);

  useEffect(() => {
	fetchTasks();
  }, [tier]);

  const fetchTasks = async () => {
	const { data } = await supabase
	  .from("tasks")
	  .select("*")
	  .eq("tier", tier)
	  .eq("user_id", user.id);
	if (data) setTasks(data);
  };

  const completeTask = async (id, spoonCost) => {
	await supabase.from("tasks").update({ status: "completed" }).eq("id", id);
	setSpoons((prev) => prev - spoonCost);
	fetchTasks();
  };

  const deferTask = async (id) => {
	await supabase.from("tasks").update({ status: "deferred" }).eq("id", id);
	fetchTasks();
  };

  return (
	<div>
	  <h3 className="text-lg font-bold mb-4">Tiered Tasks</h3>
	  <div className="flex justify-center mb-4">
		<button onClick={() => setTier("tier_1")} className="btn mx-1">
		  Tier 1
		</button>
		<button onClick={() => setTier("tier_2")} className="btn mx-1">
		  Tier 2
		</button>
		<button onClick={() => setTier("tier_3")} className="btn mx-1">
		  Tier 3
		</button>
	  </div>
	  <p className="mb-4">Remaining Spoons: {spoons}</p>
	  <ul>
		{tasks.map((task) => (
		  <li key={task.id} className="mb-2">
			<span>{task.title}</span>
			<button
			  onClick={() => completeTask(task.id, task.spoons)}
			  className="btn btn-xs btn-success mx-2"
			>
			  Complete
			</button>
			<button
			  onClick={() => deferTask(task.id)}
			  className="btn btn-xs btn-warning mx-2"
			>
			  Defer
			</button>
		  </li>
		))}
	  </ul>
	</div>
  );
};

export default TaskManager;