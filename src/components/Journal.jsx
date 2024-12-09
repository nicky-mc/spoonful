import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { useUser } from "@clerk/clerk-react";

const Journal = () => {
  const { user } = useUser();
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const saveEntry = async () => {
    if (selectedEntry) {
      const { error } = await supabase
        .from("journal")
        .update({ content: entry, date: new Date() })
        .eq("id", selectedEntry.id);
      if (!error) {
        setEntry("");
        setSelectedEntry(null);
        fetchEntries();
      }
    } else {
      const { error } = await supabase
        .from("journal")
        .insert([{ content: entry, date: new Date(), user_id: user.id }]);
      if (!error) {
        setEntry("");
        fetchEntries();
      }
    }
  };

  const fetchEntries = async () => {
    const { data, error } = await supabase
      .from("journal")
      .select("*")
      .eq("user_id", user.id)
      .order("date", { ascending: false });
    if (!error) setEntries(data);
  };

  const deleteEntry = async (id) => {
    const { error } = await supabase
      .from("journal")
      .delete()
      .eq("id", id);
    if (!error) fetchEntries();
  };

  const selectEntry = (entry) => {
    setSelectedEntry(entry);
    setEntry(entry.content);
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md mt-8">
      <h3 className="font-bold text-lg mb-2">Daily Journal</h3>
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Reflect on your day..."
        className="textarea textarea-bordered w-full mb-2"
      ></textarea>
      <button onClick={saveEntry} className="btn btn-primary">
        {selectedEntry ? "Update Entry" : "Save Entry"}
      </button>
      {selectedEntry && (
        <button
          onClick={() => {
            setSelectedEntry(null);
            setEntry("");
          }}
          className="btn btn-secondary ml-2"
        >
          Cancel
        </button>
      )}
      <div className="mt-4">
        <h4 className="font-bold text-md mb-2">Your Entries</h4>
        {entries.map((entry) => (
          <div key={entry.id} className="p-2 bg-white rounded shadow-sm mb-2">
            <div className="flex justify-between items-center">
              <div onClick={() => selectEntry(entry)} className="cursor-pointer">
                <p className="font-bold">{new Date(entry.date).toLocaleDateString()}</p>
                <p className="truncate">{entry.content}</p>
              </div>
              <button
                onClick={() => deleteEntry(entry.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journal;