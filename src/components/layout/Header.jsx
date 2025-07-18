import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex justify-between items-center h-16 bg-gray-800 text-white px-5">
      <div className="text-2xl font-bold">MovieMania</div>
      <ul className="md:flex gap-8 text-2xl hidden">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "text-blue-500" : "text-white")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-blue-500" : "text-white")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movie"
            className={({ isActive }) => (isActive ? "text-blue-500" : "text-white")}
          >
            Movie
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-blue-500" : "text-white")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:scale-125 transition-transform duration-300 hover:bg-blue-700">
          Login
        </button>
      </div>
    </header>
  );
};
