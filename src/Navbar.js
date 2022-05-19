import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Navbar = () => {
  const {
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    openSubmenu,
    closeSubmenu,
  } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  console.log(sublinks);
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" />
          <button className="btn toggle-btn" onClick={() => openSidebar()}>
            <FaBars></FaBars>
          </button>
        </div>
        <ul className="nav-links">
          {sublinks.map((link, index) => {
            const { page } = link;
            return (
              <li key={index}>
                <button className="link-btn" onMouseOver={displaySubmenu}>
                  {page}
                </button>
              </li>
            );
          })}
        </ul>
        <button className="btn sigin-btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
