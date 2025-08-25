import { NavLink } from "react-router-dom";
import { Home, FileText, User, LogIn, UserPlus, LogOut } from "lucide-react";


function Sidebar() {
  

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col p-5 justify-between h-screen">
      <div>
        <h2 className="text-2xl font-bold mb-8">AI Resume Builder</h2>

        <nav className="flex flex-col gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
            }
          >
            <Home size={18} />
            Home
          </NavLink>

          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
            }
          >
            <FileText size={18} />
            Resume
          </NavLink>
          <NavLink
            to="/templates"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
            }
          >
            <FileText size={18} />
            Templates
          </NavLink>


        </nav>
      </div>

      <div className="flex flex-col gap-3">
      

          <>
            <NavLink
              to="/login"
              className="flex items-center gap-2 justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
            >
              <LogIn size={18} />
              Login
            </NavLink>

            <NavLink
              to="/register"
              className="flex items-center gap-2 justify-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md"
            >
              <UserPlus size={18} />
              Register
            </NavLink>
          </>
          <div>
            <div className="flex flex-col items-center">
              <p className="text-sm mb-2"></p>
              <p className="font-semibold text-center mb-3"></p>
              <button
               
                className="flex items-center gap-2 justify-center bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md"
              >
                <LogOut size={18} />
              </button>
            </div>
          </div>
        

      </div>
    </div>
  );
}

export default Sidebar;