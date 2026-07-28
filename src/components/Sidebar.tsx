import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-8">
        PM Dashboard
      </h2>

      <nav className="flex flex-col gap-4">
        <NavLink to="/dashboard">Dashboard</NavLink>

        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/project-details">Project Details</NavLink>
        <NavLink to="/task-details">Task Details</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;