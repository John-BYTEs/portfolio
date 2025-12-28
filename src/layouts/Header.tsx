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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full px-4 py-4 bg-gray-800/30 shadow-md font-mono font-extrabold text-md md:text-lg lg:text-xl">
        <div className="flex items-center justify-between">

          {/* Logo pero magama pako */}
          <h1 className="text-gray-200">John Bytes</h1>

          {/* Web view Navigation */}
          <div className="hidden md:flex rounded-xl p-2 justify-center items-center">
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList className="flex gap-6">
                <NavigationMenuItem>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `text-xl ${
                        (isActive)
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
                        (isActive)
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
                        (isActive)
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
          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile view */}
        <nav
          className={`
              md:hidden
              overflow-hidden
              transition-all
              duration-300
              ease-in-out
              ${
                isOpen
                  ? "max-h-[var(--nav-height)] opacity-100"
                  : "max-h-0 opacity-0"
              }
              flex flex-col gap-4 mt-4 text-white
            `}
        >
          <NavLink to="/" className="hover:text-blue-400">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-blue-400">
            About
          </NavLink>
          <NavLink to="/projects" className="hover:text-blue-400">
            Projects
          </NavLink>
        </nav>
      </header>
    </>
  );
}
