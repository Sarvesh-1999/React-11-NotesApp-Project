import { useState } from "react";
import { useAuth } from "../context/UserContextProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, setUser } = useAuth();
  const [menuToggle, setMenuToggle] = useState(false);
  const handleMenuToggle = () => setMenuToggle((prev) => !prev);

  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
    navigate("/login");
    toast.success("Logout successfull");
  };

  return (
    <header className="py-8 px-40 flex justify-between items-center shadow">
      <div className="flex gap-2 items-center font-extrabold text-3xl">
        <figure>📖</figure>
        <div>
          <span className="text-blue-500">Notes</span> App
        </div>
      </div>

      <nav className="flex items-center gap-5 font-semibold text-lg">
        <Link to={"#"}>Features</Link>
        <Link to={"#"}>Pricing</Link>
        <Link to={"#"}>About</Link>
        <div
          onClick={handleMenuToggle}
          className=" cursor-pointer relative h-10 w-10 rounded-full bg-blue-500 text-white flex justify-center items-center font-bold"
        >
          {user.username.charAt(0)}

          {menuToggle && (
            <ul
              onClick={handleMenuToggle}
              className="bg-gray-50 absolute top-13 right-0 shadow-lg text-black p-5 font-normal min-w-50 cursor-pointer"
            >
              <li className="py-2 px-5 hover:bg-white">My Account</li>
              <li className="py-2 px-5 hover:bg-white">Notes</li>
              <li className="py-2 px-5 hover:bg-white">Delete Profile</li>
              <li className="py-2 px-5 hover:bg-white">Update Profile</li>
              <li className="py-2 px-5 hover:bg-white" onClick={handleLogout}>
                Logout
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
