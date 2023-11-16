import "./Styles/Navbar.css";
import images from "../Utils/images";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <Link className="nav-link active" aria-current="page" to="/"><img className="logo" src={images.logo} alt="" /></Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/dedicated-server">Dedicated Server</Link>
            </li>
            <li className="nav-item">
                <Link to="/vpskvm" className="nav-link" aria-current="page" >VPS</Link>
            </li>
            <li className="nav-item">
                <Link to="/cloud" className="nav-link" aria-current="page" >Cloud</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about">About</Link>
            </li>
          </ul>
          <div className="btn_double">
            <a href="https://my.donhoster.com/index.php?rp=/login"><button className="btn btn-outline" type="submit">Sign In</button></a>
            <a href="https://my.donhoster.com/register.php"><button className="btn btn-outline" type="submit">Sign Up</button></a>
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
