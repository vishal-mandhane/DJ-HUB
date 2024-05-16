import { Link } from "react-router-dom";
import "../header/Navbar.css";
import navLogo from "../../assests/djhublogo.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const name = useSelector((currentUser) => currentUser.user.currentUser);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <Link to="/home">
          <div className="logo-img">
            <img src={navLogo} alt="" />
          </div>
        </Link>
        <li className="navbar-item">
          <Link to="/home" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/menu" className="navbar-link">
            Menu
          </Link>
        </li>
        {name === "Vishal" && (
          <li className="navbar-item">
            <Link to="/updatefood" className="navbar-link">
              Food Items
            </Link>
          </li>
        )}
        {name !== "Vishal" && (
        <li className="navbar-item">
          <Link to="/cart" className="navbar-link">
            Cart
          </Link>
        </li>
      )}

      {name !== "Vishal" && (
        <li className="navbar-item">
          <Link to="/orders" className="navbar-link">
            Orders
          </Link>
        </li>
      )}

    {name === "Vishal" && (
        <li className="navbar-item">
          <Link to="/adminpanel" className="navbar-link">
            Admin Panel
          </Link>
        </li>
    )}
    
        <li className="navbar-item">
          <Link to="/account" className="navbar-link">
            Profile
          </Link>
        </li>
      

      </ul>
    </nav>
  );
};

export default Navbar;