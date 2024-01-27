import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="nav-bar">
      <Link to="/" className={pathname == "/" ? "focused" : "heading"}>
        Home
      </Link>

      <Link
        to="/login"
        className={pathname == "/login" ? "focused" : "heading"}
      >
        Login
      </Link>
    </div>
  );
};
