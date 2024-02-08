import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../images/logos/logo-theme.png";

const Navbar = () => {
  const [navbar, toggleNav] = useState(false);

  return (
    <React.Fragment>
      <div className="navbar">
        <a href="/home" className="navbarLeft">
          <img src={Logo} alt="Starlight Foundation Logo" />
          <h3>STARLIGHT FOUNDATION</h3>
        </a>
        <div className={"navbarRight " + navbar}>
          <div className="navLink">
            <a href="/">About Us</a>
          </div>
          <div className="navLink">
            <a href="/volunteer">Volunteer</a>
          </div>
          <div className="navLink">
            <a href="/donate">Donate</a>
          </div>
          {/* <div className="navLink"><a href="/team">Our Team</a></div> */}
          <div className="navLink">
            <a href="/partner">Partner with Us</a>
          </div>
          <div className="navLink">
            <a href="/contactus">Contact Us</a>
          </div>
          <div className="navLink hasDropdown">
            <a>Annual Report</a>
            <div className="dropdownMenu">
              <ul>
                <li>
                  <a href="./Work Report 2020-2021.pdf" target="_blank">
                    2020-2021
                  </a>
                </li>
                <li>  
                  <a href="./Work Report 2021-2022.pdf" target="_blank">
                    2021-2022
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="menuHamburger" onClick={() => toggleNav(!navbar)}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
