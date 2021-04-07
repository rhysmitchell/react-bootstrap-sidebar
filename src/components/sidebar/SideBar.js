import React, { useContext } from "react";
import { SidebarContext } from '../../context/sideBarContext';

const SideBar = ({ title, children }) => {
    const { setIsSideBarPage, sidebarIsOpen, toggleSidebar } = useContext(SidebarContext);
    setIsSideBarPage && setIsSideBarPage(true);

    return (
        <div className={`sidebar ${sidebarIsOpen ? "is-open" : ""}`} >
            <div className="sidebar-header">
                {title && <h3>{title}</h3>}
                <span color="info" onClick={toggleSidebar} style={{ color: "#fff" }}>
                    &times;
      </span>
            </div>
            <div className="side-menu sticky-top">
                {children}
            </div>
        </div>
    )
};

export default SideBar;
