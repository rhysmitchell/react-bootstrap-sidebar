import React, { useContext } from "react";
import { SidebarContext } from '../../context/sideBarContext';

const Content = ({ children }) => {
  const { sidebarIsOpen } = useContext(SidebarContext);

  return (
    <div className={`content ${sidebarIsOpen ? 'is-open' : ''}`}>
      {children}
    </div>
  )
};

export default Content;
