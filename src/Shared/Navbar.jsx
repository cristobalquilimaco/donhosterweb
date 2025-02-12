import "./Styles/Navbar.css";
import images from "../Utils/images";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true)


  return (
    <nav className="navbar navbar-expand-lg bg-white m-0 p-0">
      <div className="container-fluid sidebar p-2">
        <Link className="nav-link active" aria-current="page" to="/">
          <img 
            className="logo" 
            src={images.logo} 
            alt="DonHoster logo" 
            width="200" 
            height="50"
            loading="lazy"
          />
        </Link>
        <button 
          className="navbar-toggler shadow-none border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarTogglerDemo02" 
          aria-controls="navbarTogglerDemo02" 
          aria-expanded="false" 
          aria-label="Toggle navigation" onClick={()=>setCollapsed(!collapsed)}>
        {
          collapsed ? (<i className='icon_nav bx bx-menu'></i>) : (<i className='icon_nav bx bx-x'></i>)
        }
          
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/dedicated-servers">Dedicated Servers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/hosting">Web Hosting</Link>
            </li>
            <li className="nav-item">
              <Link to="/vps" className="nav-link" aria-current="page">VPS</Link>
            </li>
            <li className="nav-item">
              <Link to="/cloud" className="nav-link" aria-current="page">Cloud</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about-donhoster">About</Link>
            </li>
          </ul>
          <div className="btn_double">
            <a href="https://my.donhoster.com/index.php?rp=/login">
              <button className="btn btn-outline" type="submit">Client Area</button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
