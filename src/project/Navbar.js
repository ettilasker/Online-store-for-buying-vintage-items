import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from "../images/logo_Antique.jpg";
import { useNavigate } from "react-router-dom";


const Navbar = ({ cartItems, userName }) => {
  const navigate = useNavigate()

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">
      <img style={{ width: 100, height: 100 }} src={logo} />
      </a>
      <a className="navbar-brand" href="/About">
        About
      </a>
      <a >
        <Link className="navbar-brand" to="/StoreItems">Shop</Link>
      </a>
      <a className="navbar-brand" href="/">
        Home
      </a>
      <a>
      <Link className="navbar-brand" to='./Cart'>Cart</Link>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search" />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button"
                 onClick={() => {navigate("/StoreItems")}}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <FontAwesomeIcon icon={faShoppingCart} /> 
              <Link to='./Cart'>Cart</Link>
              {cartItems.length > 0 && <span className="badge badge-danger">{cartItems.length}</span>}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <FontAwesomeIcon icon={faUser} /> {userName}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



