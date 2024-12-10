// src/components/Navbar.jsx
import React from "react";
import { SignedIn, SignedOut, SignInButton, SignOutButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { user } = useUser();

  return (
    <nav className="navbar bg-base-100 shadow-lg p-4">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">Spoonful Planner</a>
      </div>
      <div className="flex-none">
        {/* Show user info and sign-out button if signed in */}
        <SignedIn>
          <div className="flex items-center space-x-4">
            <p className="text-gray-700 font-medium">Welcome, {user?.firstName || "User"}!</p>
            <SignOutButton>
              <button className="btn btn-secondary">Sign Out</button>
            </SignOutButton>
          </div>
        </SignedIn>

        {/* Show sign-in button if signed out */}
        <SignedOut>
          <SignInButton>
            <button className="btn btn-primary">Sign In</button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
