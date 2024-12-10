import React, { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { supabase } from "../supabaseClient";

const UserProfile = () => {
  const { user } = useUser();

  useEffect(() => {
    const insertUserProfile = async () => {
      if (user) {
        const { id, username } = user; // Assuming you have a username field in Clerk
        const { error } = await supabase
          .from("profiles")
          .upsert([{ user_id: id, username }]); // Use upsert to insert or update

        if (error) {
          console.error("Error inserting user profile:", error.message);
        }
      }
    };

    insertUserProfile();
  }, [user]);

  return <div>User Profile Component</div>;
};

export default UserProfile;