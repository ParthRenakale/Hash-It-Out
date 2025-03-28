
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const isUserSignedIn = !!localStorage.getItem('token'); 

  return (
    <nav className="bg-black border-b border-gray-800 flex justify-between items-center text-white">
      <NavLink to="/">
        <div className="logo">
          <img src="./website.jpg" alt="To-Let Logo" className="h-20" /> 
          
        </div>
      </NavLink>

      <ul className="flex space-x-6 text-sm p-5">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "hover:bg-teal-500 px-2 py-1 rounded bg-teal-400" : "hover:bg-teal-500 px-2 py-1 rounded"
            }
          >
            Home
          </NavLink>
        </li>
        
        {!isUserSignedIn ? (
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "hover:bg-teal-500 px-2 py-1 rounded bg-teal-400" : "hover:bg-teal-500 px-2 py-1 rounded"
              }
            >
              Login
            </NavLink>
          </li>
        ) : (
          <li>
            <button
              onClick={handleLogout}
              className="hover:bg-teal-500 px-2 py-1 rounded bg-teal-400"
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

