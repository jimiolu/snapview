import { Link, useNavigate } from "react-router-dom";
import { getUser, clearUser } from "../auth";

const Navbar = () => {
  const user = getUser();
  const navigate = useNavigate();

  const logout = async () => {
    await fetch("http://localhost:5001/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    clearUser();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white lg:px-38 px-4 h-16 flex justify-between items-center">
      <Link to="/" className="text-green-400 font-medium text-3xl">
        Snapview
      </Link>
      <div className="space-x-4">
        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <>
            {user.role === "creator" && <Link to="/upload">Upload</Link>}
            <Link to="/upload">Upload</Link>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
