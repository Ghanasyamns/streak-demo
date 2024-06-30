import React, { useRef } from "react";

function SideBar({ children, title }) {
  const sideBarRef = useRef(null);
  const contentRef = useRef(null);
  const navRef = useRef();
  const closeSideBar = () => {
    contentRef.current.style.marginLeft = "0%";
    sideBarRef.current.style.display = "none";
    navRef.current.style.display = "inline-block";
  };
  const openSideBar = () => {
    contentRef.current.style.marginLeft = "25%";
    sideBarRef.current.style.width = "25%";
    sideBarRef.current.style.display = "block";
    navRef.current.style.display = "none";
  };
  const navItems = [
    {
      label: "Home",
    },
    {
      label: "Customization",
    },
  ];
  return (
    <>
      <div
        className="sidebar w3-bar-block w3-card w3-animate-left"
        style={{ display: "none" }}
        ref={sideBarRef}
      >
        <button
          className="w3-bar-item w3-button w3-large"
          onClick={closeSideBar}
        >
          Close &times;
        </button>
        {navItems.map((item, i) => (
          <a key={i} href="#" className="w3-bar-item w3-button">
            {item.label}
          </a>
        ))}
      </div>

      <div ref={contentRef}>
        <div className="w3-teal">
          <button
            ref={navRef}
            id="openNav"
            className="w3-button w3-teal w3-xlarge"
            onClick={openSideBar}
          >
            &#9776;
          </button>
          <div className="w3-container">
            <h1 className="sidebar-title">{title}</h1>
          </div>
        </div>

        <div className="w3-container">{children}</div>
      </div>
    </>
  );
}

export default SideBar;
