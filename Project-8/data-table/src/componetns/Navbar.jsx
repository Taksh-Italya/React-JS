import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info px-3">
      <span className="navbar-brand">Navbar</span>     
      <div className="ml-auto">
        <Link to="/" className="nav-link d-inline text-dark">Home</Link>
        <Link to="/view" className="nav-link d-inline text-dark">View</Link>
      </div>
    </nav>
  );
}
