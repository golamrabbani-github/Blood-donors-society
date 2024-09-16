import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Font Awasome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./NavberCssFiles/navber.css";
import gallery from "./../Pages/Galary/gallery";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="nav-bar">
        <div className="banner-area">
          <div className="banner-logo-text">
            <h1>যাদুরানী ব্লাড ডোনার্স সোসাইটি [J.B.D.S]</h1>
            <span>রক্ত দাতা গন</span>
            <p>যাদুরানি, হরিপুর, ঠাকুরগাও</p>
          </div>
        </div>

        {/* Navigation Panel */}
        <div className="panel-bar">
          <div className="home-galary-donors-list">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `navber-pages-buttons ${isActive ? "active" : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/Gallery"
              className={({ isActive }) =>
                `navber-pages-buttons ${isActive ? "active" : ""}`
              }
            >
              Gallery
            </NavLink>

            <NavLink
              to="/DonorsList"
              className={({ isActive }) =>
                `navber-pages-buttons ${isActive ? "active" : ""}`
              }
            >
              Donors List
            </NavLink>
          </div>

          {/*  */}
          {/*  */}
          {/*  */}

          <div className="panel-2nd-part">
            <div className="navber-responsive-menu-icon" onClick={toggleMenu}>
              <FontAwesomeIcon className="menu-icon-hide" icon={faBars} />
            </div>

            {/*  */}
            {/*  */}
            {/*  */}

            <div
              id="groupsButton"
              className={isOpen ? "nav-div2 active" : "nav-div2"}
            >
              <NavLink
                to="/A+"
                className={({ isActive }) =>
                  `navber-pages-buttons ${isActive ? "active" : ""}`
                }
              >
                A+
              </NavLink>

              <NavLink
                to="/A-"
                className={({ isActive }) =>
                  `navber-pages-buttons ${isActive ? "active" : ""}`
                }
              >
                A-
              </NavLink>

              <NavLink
                to="/B+"
                className={({ isActive }) =>
                  `navber-pages-buttons ${isActive ? "active" : ""}`
                }
              >
                B+
              </NavLink>

              <NavLink
                to="/B-"
                className={({ isActive }) =>
                  `navber-pages-buttons ${isActive ? "active" : ""}`
                }
              >
                B-
              </NavLink>

              <NavLink
                to="/AB+"
                className={({ isActive }) =>
                  `navber-pages-buttons ${isActive ? "active" : ""}`
                }
              >
                AB+
              </NavLink>

              <NavLink
                to="/AB-"
                className={({ isActive }) =>
                  `navber-pages-buttons ${isActive ? "active" : ""}`
                }
              >
                AB-
              </NavLink>

              <NavLink
                to="/O+"
                className={({ isActive }) =>
                  `navber-pages-buttons ${isActive ? "active" : ""}`
                }
              >
                O+
              </NavLink>

              <NavLink
                to="/O-"
                className={({ isActive }) =>
                  `navber-pages-buttons ${isActive ? "active" : ""}`
                }
              >
                O-
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
