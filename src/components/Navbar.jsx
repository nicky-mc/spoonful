// src/components/Navbar.jsx
import { useUser, SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/clerk-react";

const Navbar = () => {
  const { user } = useUser();

  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Spoonful Planner</a>
      </div>
      <div className="flex-none">
        <SignedIn>
          <p className="mr-4">Welcome, {user.firstName}</p>
          <SignOutButton>
            <button className="btn">Sign Out</button>
          </SignOutButton>
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <button className="btn">Sign In</button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;