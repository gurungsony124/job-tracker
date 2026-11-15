import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/login"></Link>
        <Outlet />
      </div>
    </nav>
  )
}
