import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
export const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL, // Your Supabase URL
  process.env.REACT_APP_SUPABASE_ANON_KEY   // Your Supabase Anon/Public Key
);

// Function to set the Clerk token in the Supabase client
export const setClerkToken = (clerkToken) => {
  supabase.auth.setAuth(clerkToken);
};

// Function to fetch profiles
export const fetchProfiles = async (userId) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', userId);
  
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

// Function to create a new profile
export const createProfile = async (profileData) => {
  const { error } = await supabase
    .from('profiles')
    .insert([profileData]);
  
  if (error) {
    throw new Error(error.message);
  }
};

// Function to update a profile
export const updateProfile = async (userId, profileData) => {
  const { error } = await supabase
    .from('profiles')
    .update(profileData)
    .eq('user_id', userId);
  
  if (error) {
    throw new Error(error.message);
  }
};

// Function to delete a profile
export const deleteProfile = async (userId) => {
  const { error } = await supabase
    .from('profiles')
    .delete()
    .eq('user_id', userId);
  
  if (error) {
    throw new Error(error.message);
  }
};

// Function to fetch tasks
export const fetchTasks = async (userId, tier) => {
  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .eq('user_id', userId)
    .eq('tier', tier);
  
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

// Function to create a new task
export const createTask = async (taskData) => {
  const { error } = await supabase
    .from('tasks')
    .insert([taskData]);
  
  if (error) {
    throw new Error(error.message);
  }
};

// Function to update a task
export const updateTask = async (taskId, taskData) => {
  const { error } = await supabase
    .from('tasks')
    .update(taskData)
    .eq('id', taskId);
  
  if (error) {
    throw new Error(error.message);
  }
};

// Function to delete a task
export const deleteTask = async (taskId) => {
  const { error } = await supabase
    .from('tasks')
    .delete()
    .eq('id', taskId);
  
  if (error) {
    throw new Error(error.message);
  }
};

// Function to fetch journal entries
export const fetchJournalEntries = async (userId) => {
  const { data, error } = await supabase
    .from('journal')
    .select('*')
    .eq('user_id', userId);
  
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

// Function to create a new journal entry
export const createJournalEntry = async (entryData) => {
  const { error } = await supabase
    .from('journal')
    .insert([entryData]);
  
  if (error) {
    throw new Error(error.message);
  }
};

// Function to update a journal entry
export const updateJournalEntry = async (entryId, entryData) => {
  const { error } = await supabase
    .from('journal')
    .update(entryData)
    .eq('id', entryId);
  
  if (error) {
    throw new Error(error.message);
  }
};

// Function to delete a journal entry
export const deleteJournalEntry = async (entryId) => {
  const { error } = await supabase
    .from('journal')
    .delete()
    .eq('id', entryId);
  
  if (error) {
    throw new Error(error.message);
  }
};

// Function to fetch stickers
export const fetchStickers = async (userId) => {
  const { data, error } = await supabase
    .from('stickers')
    .select('*')
    .eq('user_id', userId);
  
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

// Function to create a new sticker
export const createSticker = async (stickerData) => {
  const { error } = await supabase
    .from('stickers')
    .insert([stickerData]);
  
  if (error) {
    throw new Error(error.message);
  }
};

// Function to update a sticker
export const updateSticker = async (stickerId, stickerData) => {
  const { error } = await supabase
    .from('stickers')
    .update(stickerData)
    .eq('id', stickerId);
  
  if (error) {
    throw new Error(error.message);
  }
};

// Function to delete a sticker
export const deleteSticker = async (stickerId) => {
  const { error } = await supabase
    .from('stickers')
    .delete()
    .eq('id', stickerId);
  
  if (error) {
    throw new Error(error.message);
  }
};

export default supabase;