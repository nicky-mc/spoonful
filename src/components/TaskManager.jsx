import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { useUser } from "@clerk/clerk-react";

const TaskManager = () => {
  const { user } = useUser();
  const [tasks, setTasks] = useState([]);
  const [tier, setTier] = useState("tier_1");
  const [spoons, setSpoons] = useState(10);
  const [newTask, setNewTask] = useState({ title: "", tier: "tier_1", spoons: 10, due_date: "" });
  const [regenerationTasks, setRegenerationTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
    fetchRegenerationTasks();
  }, [tier]);

  const fetchTasks = async () => {
    const { data } = await supabase
      .from("tasks")
      .select("*")
      .eq("tier", tier)
      .eq("user_id", user.id);
    if (data) setTasks(data);
  };

  const fetchRegenerationTasks = async () => {
    const { data } = await supabase
      .from("regeneration_tasks") // Assuming you have a separate table for regeneration tasks
      .select("*")
      .eq("user_id", user.id);
    if (data) setRegenerationTasks(data);
  };

  const completeTask = async (id, spoonCost) => {
    await supabase.from("tasks").update({ status: "completed" }).eq("id", id);
    setSpoons((prev) => prev - spoonCost);
    fetchTasks();
  };

  const completeRegenerationTask = async (id, spoonIncrease) => {
    await supabase.from("regeneration_tasks").update({ status: "completed" }).eq("id", id);
    setSpoons((prev) => prev + spoonIncrease);
    fetchRegenerationTasks();
  };

  const deleteTask = async (id) => {
    await supabase.from("tasks").delete().eq("id", id);
    fetchTasks();
  };

  const createTask = async () => {
    const { error } = await supabase.from("tasks").insert([
      {
        title: newTask.title,
        tier: newTask.tier,
        spoons: newTask.spoons,
        due_date: newTask.due_date,
        user_id: user.id,
        status: "pending", // Default status
      },
    ]);
    if (error) {
      console.error("Error creating task:", error.message);
    } else {
      setNewTask({ title: "", tier: "tier_1", spoons: 10, due_date: "" }); // Reset input fields
      fetchTasks();
    }
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Tiered Tasks</h3>
      <div className="flex justify-center mb-4">
        <button onClick={() => setTier("tier_1")} className="btn mx-1">Tier 1</button>
        <button onClick={() => setTier("tier_2")} className="btn mx-1">Tier 2</button>
        <button onClick={() => setTier("tier_3")} className="btn mx-1">Tier 3</button>
      </div>
      <p className="mb-4">Remaining Spoons: {spoons}</p>

      {/* New Task Input Form */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="input"
        />
        <input
          type="date"
          value={newTask.due_date}
          onChange={(e) => setNewTask({ ...newTask, due_date: e.target.value })}
          className="input"
        />
        <input
          type="number"
          value={newTask.spoons}
          onChange={(e) => setNewTask({ ...newTask, spoons: parseInt(e.target.value) })}
          placeholder="Spoon Cost"
          className="input"
        />
        <button onClick={createTask} className="btn btn-primary">Add Task</button>
      </div>

      <h3 className="text-lg font-bold mb-4">Regeneration Tasks</h3>
      <ul>
        {regenerationTasks.map((task) => (
          <li key={task.id} className="mb-2">
            <span>{task.title}</span>
            <button onClick={() => completeRegenerationTask(task.id, task.spoon_increase)} className="btn btn-xs btn-success mx-2">Complete</button>
          </li>
        ))}
      </ul>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="mb-2">
            <span>{task.title} (Due: {task.due_date})</span>
            <button onClick={() => completeTask(task.id, task.spoons)} className="btn btn-xs btn-success mx-2">Complete</button>
            <button onClick={() => deleteTask(task.id)} className="btn btn-xs btn-danger mx-2">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;