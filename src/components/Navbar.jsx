import { Link, useLocation } from "react-router-dom";
import { Navbar as HeroNavbar, Button } from "@heroui/react";
import "../styles/navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <HeroNavbar>
      <div className="navbar-container">
        <h1 className="navbar-title">🧠 Meme Directory</h1>

        <div className="navbar-links">
          <Link to="/">
            <Button
              className={`navbar-button ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Memes Table
            </Button>
          </Link>

          <Link to="/list">
            <Button
              className={`navbar-button ${
                location.pathname === "/list" ? "active" : ""
              }`}
            >
              Memes List
            </Button>
          </Link>
        </div>
      </div>
    </HeroNavbar>
  );
};

export default Navbar;
