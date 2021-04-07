import React, {
    createContext,
    useState,
    useEffect,
} from 'react';


export const SidebarContext = createContext({});

const SidebarProvider = ({ children }) => {
    const [sidebarIsOpen, setSidebarOpen] = useState(
        localStorage.getItem('sidebarIsOpen') === "1" ||false,
    );

    const [isSideBarPage, setIsSideBarPage] = useState(false);

    useEffect(() => {
        localStorage.setItem('sidebarIsOpen', sidebarIsOpen ? '1' : '0');
    }, [sidebarIsOpen]);
    
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    
    return (
        <SidebarContext.Provider value={{ isSideBarPage, setIsSideBarPage, sidebarIsOpen, setSidebarOpen, toggleSidebar }}>
            { children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;