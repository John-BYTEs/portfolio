import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoIcon from "@mui/icons-material/Info";
import FolderIcon from "@mui/icons-material/Folder";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const MobileNavItem = ({ to, icon: Icon }: any) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `hover:text-blue-400 ${isActive ? "text-gray-700" : "text-gray-200"}`
      }
      onClick={() => setIsOpen(false)}
    >
      <Icon />
    </NavLink>
  );

  return (
    <>
      <header className="w-full px-4 py-4 bg-gray-800/30 shadow-md font-mono font-extrabold text-md md:text-lg lg:text-xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-gray-200">John Bytes</h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex rounded-xl p-2 justify-center items-center">
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList className="flex gap-6">
                <NavigationMenuItem>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `text-xl ${
                        isActive
                          ? "text-gray-700"
                          : "text-gray-400 hover:text-gray-200"
                      }`
                    }
                  >
                    <HomeRoundedIcon />
                  </NavLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                      `text-xl ${
                        isActive
                          ? "text-gray-700"
                          : "text-gray-400 hover:text-gray-200"
                      }`
                    }
                  >
                    <FolderIcon />
                  </NavLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `text-xl ${
                        isActive
                          ? "text-gray-700"
                          : "text-gray-400 hover:text-gray-200"
                      }`
                    }
                  >
                    <InfoIcon />
                  </NavLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Navigation and Burger Button */}
          <div className="flex md:hidden items-center gap-4">
            {/* Navigation items on the left */}
            <nav
              className={`
                    overflow-hidden
                    transition-all
                    duration-300
                    ease-in-out
                    flex flex-row gap-4 items-center
                    ${isOpen ? "max-h-10 opacity-100" : "max-h-0 opacity-0"}
                  `}
            >
              <MobileNavItem to="/" icon={HomeRoundedIcon} />
              <MobileNavItem to="/about" icon={InfoIcon} />
              <MobileNavItem to="/projects" icon={FolderIcon} />
            </nav>

            {/* Burger button on the right */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? (
                <CloseIcon className="text-gray-200" />
              ) : (
                <MenuIcon className="text-gray-200" />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
