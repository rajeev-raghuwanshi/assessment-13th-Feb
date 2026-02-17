import { NavLink } from "react-router-dom";

const Navbar = () => {
  const baseStyle = "px-3 py-2 text-sm font-medium transition-colors duration-200";

  const activeStyle = "text-blue-600 border-b-2 border-blue-600";
  const inactiveStyle = "text-gray-600 hover:text-blue-500";

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex space-x-6 h-14 items-center">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Books
          </NavLink>

          <NavLink
            to="/Characters"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Characters
          </NavLink>

          <NavLink
            to="/Houses"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Houses
          </NavLink>

          <NavLink
            to="/Spells"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Spells
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
