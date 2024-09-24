import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import "../App.css";

const Layout = () => {
  return (
    <>
      <nav className="Navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
