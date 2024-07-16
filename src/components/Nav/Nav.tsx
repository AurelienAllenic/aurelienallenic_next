import "@/styles/nav.scss";
import "@/styles/dropDown.scss";
import React, { useState } from "react";
import { DropDownElements } from "./Dropdown/DropDownElements";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeNavMob = () => {
    setShowLinks(false);
    setDropdownOpen(false);
  };

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
    if (!showLinks) {
      const navElement = document.getElementById("nav");
      if (navElement) {
        navElement.classList.add("show-nav");
      }
    } else {
      closeNavMob();
    }
  };

  return (
    <div className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`} id="nav">
      <ul className="navbar_links">
        <li className="navbar_item slideInDown-1">
          <ScrollLink
            className="navbar_link"
            to="home"
            spy={true}
            smooth={true}
            offset={-70} // Ajustez cet offset selon votre besoin
            duration={800}
            onClick={handleShowLinks}
          >
            Accueil
          </ScrollLink>
        </li>
        <li className="navbar_item slideInDown-2">
          <ScrollLink
            className="navbar_link"
            to="cvLetter"
            spy={true}
            smooth={true}
            offset={-70} // Ajustez cet offset selon votre besoin
            duration={800}
            onClick={handleShowLinks}
          >
            Curriculum
          </ScrollLink>
        </li>
        <li className="navbar_item slideInDown-3">
          <ScrollLink
            className="navbar_link"
            to="home"
            spy={true}
            smooth={true}
            offset={-70} // Ajustez cet offset selon votre besoin
            duration={800}
            onClick={handleShowLinks}
          >
            Programmation
          </ScrollLink>
        </li>
        <li
          className="navbar_item slideInDown-4"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <div className="navbar_link" onClick={toggleDropdown}>
            Portfolio
            {dropdownOpen && (
              <ul className="dropdown-menu">
                {DropDownElements.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.path} // Utilisation d'un lien classique pour le dropdown
                      className="linkStyle"
                      onClick={closeNavMob}
                    >
                      <span>{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
        <li className="navbar_item slideInDown-5">
          <ScrollLink
            className="navbar_link"
            to="contact"
            spy={true}
            smooth={true}
            offset={100} // Ajustez cet offset selon votre besoin
            duration={800}
            onClick={handleShowLinks}
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
      <button className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </div>
  );
}

export default Navbar;
