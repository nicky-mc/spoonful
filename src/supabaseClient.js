import { createClient } from '@supabase/supabase-js';

// Create a Supabase client
const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL, // Your Supabase URL
  process.env.REACT_APP_SUPABASE_ANON_KEY // Your Supabase Anon/Public Key
);

// Function to set the Clerk token in the Supabase client
export const setClerkToken = (clerkToken) => {
  supabase.auth.setAuth(clerkToken);
};

export default supabase;