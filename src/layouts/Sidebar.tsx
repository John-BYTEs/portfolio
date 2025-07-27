import { NavLink } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
  isClose: () => void;
};

export default function Sidebar({isOpen, isClose} : SidebarProps){
  
    return (
        <>
            <aside className={`fixed grid grid-rows-2 top-0 right-0 h-full w-40 bg-transparent backdrop-blur-xs shadow-lg text-white font-mono p-6 z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`} onClick={isClose}>
                <nav className="flex flex-col space-y-2">
                    <NavLink to="/" onClick={isClose} className={({isActive}) => `${isActive ? "text-green-500" : "text-blue-600"}`}>
                    <div>Home</div>
                </NavLink>
                
                <NavLink to="/about" onClick={isClose} className={({isActive}) => `${isActive ? "text-green-500" : "text-blue-600"}`}>
                    <div>About</div>
                </NavLink>

                <NavLink to="/projects" onClick={isClose} className={({isActive}) => `${isActive ? "text-green-500" : "text-blue-600"}`}>
                    <div>Projects</div>
                </NavLink>
                </nav>
                
            </aside>
        </>
    )
}