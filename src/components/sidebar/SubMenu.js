import React, { useState } from "react";
import { Collapse, Navbar, NavItem, NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SubMenu = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggle = () => setCollapsed(!collapsed);
    const { icon, title, items } = props;

    return (
        <div>
            <NavItem
                onClick={toggle}
                className={`${!collapsed ? "menu-open" : ""}`}
            >
                <NavLink className="dropdown-toggle">
                    <FontAwesomeIcon icon={icon} className="mr-2" />
                    {title}
                </NavLink>
            </NavItem>
            <Navbar.Collapse
                in={!collapsed}
                className={`items-menu ${!collapsed ? "mb-1" : ""}`}
            >
                {items.map((item, index) => {
                    console.log(item.target);
                    return (
                        <NavItem key={index} className="pl-4">
                            <NavLink as={Link} to={`/${item.target}`}>
                                {item.title}
                            </NavLink>
                        </NavItem>
                    )
                })}
            </Navbar.Collapse>
        </div>
    );
};

export default SubMenu;