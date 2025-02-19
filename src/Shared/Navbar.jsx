import "./Styles/Navbar.css";
import images from "../Utils/images";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true)

  const handleLinkClick = () => {
    if(!collapsed){
      setCollapsed(true)
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-white m-0 p-0">
      <div className="container-fluid sidebar p-2">
        <Link className="nav-link active" aria-current="page" to="/">
          <img 
            className="logo" 
            src={images.logo} 
            alt="DonHoster logo" 
            width="200"
            height="40"
            loading="lazy"
            onClick={handleLinkClick}
          />
        </Link>
        <button 
          className="navbar-toggler shadow-none border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarTogglerDemo02" 
          aria-controls="navbarTogglerDemo02" 
          aria-expanded={!collapsed ? "true" : "false"} 
          aria-label="Toggle navigation" onClick={()=>setCollapsed(!collapsed)}>
        {
          collapsed ? (<i className='icon_nav bx bx-menu'></i>) : (<i className='icon_nav bx bx-x'></i>)
        }
          
        </button>
        <div id="navbarTogglerDemo02" className={`collapse navbar-collapse sidebar ${collapsed ? 'close' : 'show'}`}>
          <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/" onClick={handleLinkClick}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/dedicated-servers" onClick={handleLinkClick}>Dedicated Servers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/hosting" onClick={handleLinkClick}>Web Hosting</Link>
            </li>
            <li className="nav-item">
              <Link to="/vps" className="nav-link" aria-current="page" onClick={handleLinkClick}>VPS</Link>
            </li>
            <li className="nav-item">
              <Link to="/cloud" className="nav-link" aria-current="page" onClick={handleLinkClick}>Cloud</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about-donhoster" onClick={handleLinkClick}>About</Link>
            </li>
          </ul>
          <div className="btn_double">
            <a href="https://my.donhoster.com/index.php?rp=/login">
              <button className="btn btn-outline" type="submit" onClick={handleLinkClick}>Client Area</button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
